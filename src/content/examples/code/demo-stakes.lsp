; Minh hoa hoc tap. Ban ve thu dung don vi met, marker ban kinh 0.8.
(defun c:PTA_STAKES (/ pick route step length station point count)
  (vl-load-com)
  ;; step:select
  (setq pick (entsel "\nChon tim tuyen LWPOLYLINE: "))
  (if (and pick (= "LWPOLYLINE" (cdr (assoc 0 (entget (car pick))))))
    (progn
      (setq route (car pick))
      ;; step:measure
      (setq step (getdist "\nBuoc coc <20>: "))
      (if (null step) (setq step 20.0))
      (if (> step 0.0)
        (progn
          (setq length
            (vlax-curve-getDistAtParam
              route
              (vlax-curve-getEndParam route)))
          (setq station 0.0 count 0)
          ;; step:sample
          (while (<= station length)
            (setq point
              (vlax-curve-getPointAtDist route station))
            ;; step:mark
            (if (entmakex
                  (list '(0 . "CIRCLE")
                        '(8 . "0")
                        (cons 10 point)
                        '(40 . 0.8)))
              (setq count (1+ count)))
            (setq station (+ station step)))
          (princ
            (strcat "\nDa dat " (itoa count) " moc."))
        )
        (princ "\nBuoc coc phai lon hon 0.")))
    )
    (princ "\nHay chon LWPOLYLINE."))
  (princ)
)
