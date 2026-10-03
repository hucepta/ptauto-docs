(vl-load-com)
(defun pta:curve-release (object / result)
  (if (and (= (type object) 'VLA-OBJECT)
           (not (vlax-object-released-p object)))
    (progn
      (setq result (vl-catch-all-apply 'vlax-release-object (list object)))
      (if (vl-catch-all-error-p result)
        (prompt (strcat "\nKhông giải phóng được tham chiếu: "
                        (vl-catch-all-error-message result)))))))

(defun c:PTA_CURVE_DIVIDE_REPORT (/ *error* picked data object end-param total segments index distance-on-curve point-result)
  (defun *error* (message)
    (pta:curve-release object)
    (if message (prompt (strcat "\nBáo cáo curve đã dừng: " message)))
    (princ))
  (setq picked (entsel "\nChọn LINE, ARC, CIRCLE, ELLIPSE, LWPOLYLINE hoặc SPLINE: "))
  (cond
    ((not picked)
      (prompt "\nKhông có curve được chọn."))
    ((not (member (cdr (assoc 0 (setq data (entget (car picked)))))
                  '("LINE" "ARC" "CIRCLE" "ELLIPSE" "LWPOLYLINE" "SPLINE")))
      (prompt "\nLoại entity này không thuộc phạm vi mẫu."))
    (T
      (setq object (vlax-ename->vla-object (car picked))
            end-param (vl-catch-all-apply 'vlax-curve-getEndParam (list object)))
      (cond
        ((vl-catch-all-error-p end-param)
          (prompt (strcat "\nKhông đọc được parameter: "
                          (vl-catch-all-error-message end-param))))
        ((not (numberp end-param))
          (prompt "\nKhông có parameter cuối hợp lệ."))
        (T
          (setq total
            (vl-catch-all-apply 'vlax-curve-getDistAtParam (list object end-param)))
          (cond
            ((vl-catch-all-error-p total)
              (prompt (strcat "\nKhông đo được curve: "
                              (vl-catch-all-error-message total))))
            ((or (not (numberp total)) (<= total 0.0))
              (prompt "\nCurve không có chiều dài dương."))
            (T
              (initget 7)
              (setq segments (getint "\nSố đoạn chia, tối đa 1000: "))
              (if (> segments 1000)
                (prompt "\nVượt giới hạn 1000 đoạn của mẫu.")
                (progn
                  (setq index 0)
                  (repeat (1+ segments)
                    (setq distance-on-curve
                          (if (= index segments) total
                            (/ (* total index) segments))
                          point-result
                          (vl-catch-all-apply 'vlax-curve-getPointAtDist
                                             (list object distance-on-curve)))
                    (prompt (strcat "\nD=" (rtos distance-on-curve 2 6) "; WCS="))
                    (cond
                      ((vl-catch-all-error-p point-result)
                        (princ (vl-catch-all-error-message point-result)))
                      ((not point-result)
                        (princ "không đánh giá được điểm"))
                      (T (princ point-result)))
                    (setq index (1+ index)))))))))))
  (pta:curve-release object)
  (princ))
(princ)
