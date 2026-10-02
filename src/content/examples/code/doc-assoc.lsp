; Du lieu tu tao, khong thay doi ban ve.
(setq data '(("layer" . "WALL") ("color" . 3)))
(setq entry (assoc "layer" data))
(if entry
  (cdr entry)
  nil)
(assoc "missing" data)

