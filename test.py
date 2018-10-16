import cv2
import face_recognition_models
capture = cv2.VideoCapture(0)

capture.set(3,320)
capture.set(4,240)
while(1):
    print('opencv 동작중')
    ret,frame = capture.read()
    cv2.imshow('webcam',frame)
    if cv2.waitKey(1) == ord('q'):
        break;
capture.release()
cv2.destroyAllWindows()
