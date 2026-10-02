(defun c:PTA_COUNT_LINES (/ selection)
  (setq selection (ssget '((0 . "LINE"))))
  (if selection
    (princ (strcat "\nSo LINE: " (itoa (sslength selection))))
    (princ "\nKhong co LINE trong lua chon."))
  (princ))
(princ)

