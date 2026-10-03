; Mo ban ve thu, dat UCS = World. Lenh tao va di chuyen hai entity moi.
(defun c:PTDEMO (/ line circle ss)
;; step:line
(command "_.LINE" "_non" '(0 0 0) "_non" '(120 0 0) "")
(setq line (entlast))
;; step:circle
(command "_.CIRCLE" "_non" '(60 0 0) 24)
(setq circle (entlast))
;; step:select
(setq ss (ssadd))
(ssadd line ss)
(ssadd circle ss)
;; step:move
(command "_.MOVE" ss "" "_non" '(0 0 0) "_non" '(0 30 0))
;; step:end
(princ)
)
