(vl-load-com)
(defun pta:rect-release (object / result)
  (if (and (= (type object) 'VLA-OBJECT)
           (not (vlax-object-released-p object)))
    (progn
      (setq result (vl-catch-all-apply 'vlax-release-object (list object)))
      (if (vl-catch-all-error-p result)
        (prompt (strcat "\nKhông giải phóng được tham chiếu: "
                        (vl-catch-all-error-message result)))))))

(defun c:PTA_VLA_RECT (/ *error* app doc space object coordinates undo-open result reference)
  (defun *error* (message)
    (if undo-open
      (progn
        (setq result (vl-catch-all-apply 'vla-EndUndoMark (list doc)))
        (if (vl-catch-all-error-p result)
          (prompt (strcat "\nKhông đóng được nhóm Undo: "
                          (vl-catch-all-error-message result))))
        (setq undo-open nil)))
    (foreach reference (list object space doc app)
      (pta:rect-release reference))
    (if message
      (prompt (strcat "\nTạo polyline đã dừng: " message
                      "\nPhần đã tạo có thể còn trong bản vẽ; dùng U để hoàn tác.")))
    (princ))
  (setq app (vlax-get-acad-object)
        doc (vla-get-ActiveDocument app)
        space (vla-get-ModelSpace doc)
        coordinates (vlax-make-safearray vlax-vbDouble '(0 . 7)))
  (vlax-safearray-fill coordinates '(0.0 0.0 120.0 0.0 120.0 60.0 0.0 60.0))
  (vla-StartUndoMark doc)
  (setq undo-open T
        object (vla-AddLightWeightPolyline space (vlax-make-variant coordinates)))
  (vla-put-Normal object (vlax-3D-point '(0.0 0.0 1.0)))
  (vla-put-Elevation object 0.0)
  (vla-put-Closed object :vlax-true)
  (prompt (strcat "\nĐã tạo hình chữ nhật; Handle: " (vla-get-Handle object)
                  "; chiều dài: " (rtos (vla-get-Length object) 2 3)))
  (vla-EndUndoMark doc)
  (setq undo-open nil)
  (foreach reference (list object space doc app)
    (pta:rect-release reference))
  (princ))
(princ)
