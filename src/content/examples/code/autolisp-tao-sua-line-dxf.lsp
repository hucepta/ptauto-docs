(defun c:PTA_DXF_LINE (/ *error* start-ucs end-ucs start-wcs end-wcs created name data undo-open)
  (defun *error* (message)
    (if undo-open
      (progn (command-s "._UNDO" "_End") (setq undo-open nil)))
    (if message
      (prompt (strcat "\nTạo LINE đã dừng: " message
                      "\nNếu LINE đã tạo, dùng U để hoàn tác nhóm.")))
    (princ))
  (cond
    ((/= 0 (logand 4 (cdr (assoc 70 (tblsearch "LAYER" "0")))))
      (prompt "\nLayer 0 bị khóa."))
    ((not (setq start-ucs (getpoint "\nĐiểm đầu LINE: ")))
      (prompt "\nKhông có điểm đầu."))
    ((not (setq end-ucs (getpoint start-ucs "\nĐiểm cuối LINE: ")))
      (prompt "\nKhông có điểm cuối."))
    (T
      (setq start-wcs (trans start-ucs 1 0)
            end-wcs (trans end-ucs 1 0))
      (if (<= (distance start-wcs end-wcs) 1e-9)
        (prompt "\nHai điểm trùng hoặc quá gần theo dung sai mẫu.")
        (progn
          (command-s "._UNDO" "_Begin")
          (setq undo-open T
                created
                  (entmake
                    (list '(0 . "LINE") '(8 . "0")
                          (cons 10 start-wcs) (cons 11 end-wcs))))
          (if created
            (progn
              (setq name (entlast)
                    data (entget name)
                    data (vl-remove-if '(lambda (item) (= (car item) 420)) data))
              (setq data
                (if (assoc 62 data)
                  (subst '(62 . 3) (assoc 62 data) data)
                  (append data '((62 . 3)))))
              (if (entmod data)
                (progn
                  (entupd name)
                  (prompt (strcat "\nĐã tạo LINE, Handle: " (cdr (assoc 5 data)))))
                (prompt "\nĐã tạo LINE nhưng không đổi được màu; có thể dùng U.")))
            (prompt "\nentmake không tạo được LINE."))
          (command-s "._UNDO" "_End")
          (setq undo-open nil)))))
  (princ))
(princ)
