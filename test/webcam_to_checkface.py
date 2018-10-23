import face_recognition
import cv2

capture = cv2.VideoCapture(0)

criminal_img = face_recognition.load_image_file("m32.jpg")
criminal_face_encoding = face_recognition.face_encodings(criminal_img)[0]

known_face_encodings  = [
    criminal_face_encoding
]

known_face_names  =[
    "criminal"
]

face_locations=[]
face_encodings = []
face_names = []
proccess_frame=True

while(True):
    ret,frame=capture.read()
    small_frame = cv2.resize(frame,(0,0),fx=0.25,fy=0.25)
    rgb_small_frame = small_frame[:,:,::-1]
    face_locations = face_recognition.face_locations(small_frame,model="cnn")

    if proccess_frame:
        face_locations = face_recognition.face_locations(rgb_small_frame)
        face_encodings = face_recognition.face_encodings(rgb_small_frame,face_locations)
        for face_encoding in face_encodings:
            matche = face_recognition.compare_faces(known_face_encodings,face_encoding)
            name = "Unknown"
            if True in matche:
                match_idx = matche.index(True)
                name = known_face_names[match_idx]
            face_names.append(name)
    proccess_frame = not proccess_frame
    print(frame)
    for top,right,bottom,left in zip(face_locations,face_names):
        top *= 4
        right *= 4
        bottom *= 4
        left *= 4

        cv2.rectangle(frame, (left, top), (right, bottom), (0, 0, 255), cv2.FILLED)
        cv2.rectangle(frame, (left, bottom - 35), (right, bottom), (0, 0, 255), cv2.FILLED)
        cv2.putText(frame, name, (left + 6, bottom - 6), cv2.FONT_HERSHEY_DUPLEX, 1.0, (255, 255, 255), 1)

    cv2.imshow('webcam', frame)
    if cv2.waitKey(1) == ord('q'):
        break

capture.release()
cv2.destroyAllWindows()