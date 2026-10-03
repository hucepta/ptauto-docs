(defun c:PTA_BLOCK_ATTRS (/ picked block data current item kind count finished tag value)
  (setq picked (entsel "\nChọn block có attribute thường: ")
        count 0)
  (cond
    ((not picked)
      (prompt "\nKhông có đối tượng được chọn."))
    (T
      (setq block (car picked)
            data (entget block))
      (cond
        ((/= (cdr (assoc 0 data)) "INSERT")
          (prompt "\nĐối tượng được chọn không phải INSERT."))
        ((not (equal (cdr (assoc 66 data)) 1))
          (prompt "\nINSERT không có chuỗi attribute reference."))
        (T
          (setq current (entnext block)
                finished nil)
          (while (and current (not finished))
            (setq item (entget current)
                  kind (cdr (assoc 0 item)))
            (cond
              ((= kind "SEQEND")
                (setq finished T))
              ((= kind "ATTRIB")
                (setq tag (cdr (assoc 2 item))
                      value (cdr (assoc 1 item))
                      count (1+ count))
                (prompt
                  (strcat "\n" (if tag tag "")
                          " = " (if value value ""))))
              (T
                (setq finished T)))
            (if (not finished)
              (setq current (entnext current))))
          (prompt (strcat "\nSố attribute đã đọc: " (itoa count)))))))
  (princ))
(princ)
