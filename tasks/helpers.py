from PIL import Image
from pytesseract import image_to_string


def transform_image_in_text(image):
    return image_to_string(Image.open(image.path))
    # print image_to_string(Image.open('test-english.jpg'), lang='eng')
