from PIL import Image
import face_recognition

img = face_recognition.load_image_file("dd.jpg")

face_locations = face_recognition.face_locations(img, number_of_times_to_upsample=0,model="cnn")

print("Founded {} face in this photograph.".format(len(face_locations)))

for face_location in face_locations:
    top, right, bottom, left = face_location
    print("얼굴위치 -높이:{},왼쪽:{}.오른쪽:{},밑{}".format(top,left,right,bottom))

    face_image = img[top:bottom, left:right]
    pil_image = Image.fromarray(face_image)
    pil_image.show()