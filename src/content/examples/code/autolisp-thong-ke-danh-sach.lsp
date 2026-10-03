(defun pta:positive-scaled-values (items factor / kept item)
  (if (numberp factor)
    (progn
      (setq kept nil)
      (foreach item items
        (if (and (numberp item) (> item 0))
          (setq kept (cons item kept))))
      (mapcar '(lambda (value) (* value factor)) (reverse kept)))
    nil))

(defun pta:list-summary (items factor / values count total)
  (setq values (pta:positive-scaled-values items factor)
        count (length values)
        total (if values (apply '+ values) 0.0))
  (list
    (cons "values" values)
    (cons "count" count)
    (cons "total" total)
    (cons "average" (if (> count 0) (/ total (float count)) nil))))

(defun c:PTA_LIST_STATS (/ result)
  (setq result (pta:list-summary '(12 -3 0 8) 2.0))
  (prompt "\nKết quả thống kê số dương sau nhân hệ số: ")
  (princ result)
  (princ))
(princ)
