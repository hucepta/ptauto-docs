(vl-load-com)
(defun pta:batch-release (object / result)
  (if (and (= (type object) 'VLA-OBJECT)
           (not (vlax-object-released-p object)))
    (progn
      (setq result (vl-catch-all-apply 'vlax-release-object (list object)))
      (if (vl-catch-all-error-p result)
        (prompt (strcat "\nKhông giải phóng được tham chiếu: "
                        (vl-catch-all-error-message result)))))))

(defun pta:batch-layer-flags (name / record)
  (setq record (tblsearch "LAYER" name))
  (if (and record (assoc 70 record)) (cdr (assoc 70 record)) 0))

(defun c:PTA_VLA_SET_LAYER (/ *error* target target-record selected app doc object undo-open index data source handle result available changed skipped failed reference)
  (defun *error* (message)
    (if undo-open
      (progn
        (setq result (vl-catch-all-apply 'vla-EndUndoMark (list doc)))
        (if (vl-catch-all-error-p result)
          (prompt (strcat "\nKhông đóng được nhóm Undo: "
                          (vl-catch-all-error-message result))))
        (setq undo-open nil)))
    (foreach reference (list object doc app)
      (pta:batch-release reference))
    (if message
      (prompt (strcat "\nBatch đã dừng: " message
                      "\nMột số entity có thể đã đổi layer; dùng U để hoàn tác nhóm.")))
    (princ))
  (setq target (getstring T "\nTên layer đích đã có: ")
        target-record (tblsearch "LAYER" target))
  (cond
    ((not target-record)
      (prompt "\nLayer đích không tồn tại."))
    ((/= 0 (logand 20 (pta:batch-layer-flags target)))
      (prompt "\nLayer đích bị khóa hoặc phụ thuộc xref."))
    ((not (setq selected (ssget)))
      (prompt "\nKhông có đối tượng được chọn."))
    (T
      (setq app (vlax-get-acad-object)
            doc (vla-get-ActiveDocument app)
            index 0 changed 0 skipped 0 failed 0)
      (vla-StartUndoMark doc)
      (setq undo-open T)
      (repeat (sslength selected)
        (setq data (entget (ssname selected index))
              source (cdr (assoc 8 data))
              handle (cdr (assoc 5 data)))
        (cond
          ((not data)
            (setq skipped (1+ skipped))
            (prompt "\nBỏ qua entity không còn đọc được."))
          ((= (strcase source) (strcase target))
            (setq skipped (1+ skipped)))
          ((/= 0 (logand 4 (pta:batch-layer-flags source)))
            (setq skipped (1+ skipped))
            (prompt (strcat "\nBỏ qua Handle " handle ": layer nguồn bị khóa.")))
          (T
            (setq result
              (vl-catch-all-apply 'vlax-ename->vla-object
                                 (list (ssname selected index))))
            (if (vl-catch-all-error-p result)
              (progn
                (setq failed (1+ failed))
                (prompt (strcat "\nHandle " handle ": "
                                (vl-catch-all-error-message result))))
              (progn
                (setq object result
                      available
                        (vl-catch-all-apply 'vlax-property-available-p
                                           (list object 'Layer T)))
                (cond
                  ((vl-catch-all-error-p available)
                    (setq failed (1+ failed))
                    (prompt (strcat "\nHandle " handle ": "
                                    (vl-catch-all-error-message available))))
                  ((not available)
                    (setq skipped (1+ skipped))
                    (prompt (strcat "\nBỏ qua Handle " handle ": Layer không thể ghi.")))
                  (T
                    (setq result (vl-catch-all-apply 'vla-put-Layer (list object target)))
                    (if (vl-catch-all-error-p result)
                      (progn
                        (setq failed (1+ failed))
                        (prompt (strcat "\nHandle " handle ": "
                                        (vl-catch-all-error-message result))))
                      (setq changed (1+ changed)))))
                (pta:batch-release object)
                (setq object nil)))))
        (setq index (1+ index)))
      (vla-EndUndoMark doc)
      (setq undo-open nil)
      (prompt (strcat "\nThành công: " (itoa changed)
                      "; bỏ qua: " (itoa skipped)
                      "; thất bại: " (itoa failed)))
      (foreach reference (list doc app)
        (pta:batch-release reference))))
  (princ))
(princ)
