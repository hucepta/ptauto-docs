(defun pta:csv-quote (value / index character result)
  (setq index 1 result "\"")
  (while (<= index (strlen value))
    (setq character (substr value index 1)
          result
            (strcat result
              (if (= character "\"") "\"\"" character))
          index (1+ index)))
  (strcat result "\""))

(defun pta:line-csv-row (data / start end)
  (setq start (cdr (assoc 10 data))
        end (cdr (assoc 11 data)))
  (strcat
    (pta:csv-quote (cdr (assoc 5 data))) ","
    (pta:csv-quote (cdr (assoc 8 data))) ","
    (rtos (car start) 2 6) "," (rtos (cadr start) 2 6) ","
    (rtos (caddr start) 2 6) ","
    (rtos (car end) 2 6) "," (rtos (cadr end) 2 6) ","
    (rtos (caddr end) 2 6) ","
    (rtos (distance start end) 2 6)))

(defun c:PTA_EXPORT_LINES (/ *error* saved-dimzin selected filename stream index data count)
  (defun *error* (message)
    (if stream (progn (close stream) (setq stream nil)))
    (if saved-dimzin (setvar "DIMZIN" saved-dimzin))
    (if message
      (prompt (strcat "\nXuất CSV đã dừng: " message
                      "\nNếu file đã mở, nội dung có thể mới được ghi một phần.")))
    (princ))
  (cond
    ((not (member (getvar "LISPSYS") '(1 2)))
      (prompt "\nMẫu UTF-8 cần LISPSYS bằng 1 hoặc 2 và engine Unicode."))
    ((not (setq selected (ssget '((0 . "LINE")))))
      (prompt "\nKhông có LINE được chọn."))
    ((not (setq filename (getfiled "Lưu báo cáo LINE" "pta-lines.csv" "csv" 1)))
      (prompt "\nĐã hủy chọn file."))
    ((not (setq stream (open filename "w" "utf8-bom")))
      (prompt "\nKhông mở được file để ghi."))
    (T
      (setq saved-dimzin (getvar "DIMZIN")
            index 0 count 0)
      (setvar "DIMZIN" 0)
      (write-line "handle,layer,x1,y1,z1,x2,y2,z2,length3d" stream)
      (repeat (sslength selected)
        (setq data (entget (ssname selected index)))
        (if (and data (assoc 10 data) (assoc 11 data))
          (progn
            (write-line (pta:line-csv-row data) stream)
            (setq count (1+ count))))
        (setq index (1+ index)))
      (close stream)
      (setq stream nil)
      (setvar "DIMZIN" saved-dimzin)
      (setq saved-dimzin nil)
      (prompt (strcat "\nĐã ghi " (itoa count) " LINE vào: " filename))))
  (princ))
(princ)
