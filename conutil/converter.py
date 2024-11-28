from PIL import Image, UnidentifiedImageError
from concurrent.futures import ThreadPoolExecutor
import pillow_avif
import os

SUPPORTED_EXTENSIONS = (
    ".png",
    ".jpg",
    ".jpeg",
    ".webp",
    ".avif",
    ".bmp",
    ".gif",
    ".tif",
    ".tiff",
)


def convert_image(input_image_path: str, output_image_path: str, format: str, quality: int = 90) -> None:
    """
    Convert an image to a specified format with a specified quality.
    Example usage:
        ```python
        convert_image("input.jpg", "output.webp", "WEBP", 90)
        ```
    """

    if not input_image_path.lower().endswith(SUPPORTED_EXTENSIONS):
        raise ValueError(f"Unsupported image format. Supported formats: {SUPPORTED_EXTENSIONS}")

    format = format.upper()

    try:
        image = Image.open(input_image_path)
        output_image_path_with_extension = f"{os.path.splitext(output_image_path)[0]}.{format}"

        if format == "JPG" or format == "JPEG":
            image = image.convert("RGB")
            format = "JPEG"
        elif format == "TIF":
            format = "TIFF"

        if format == "AVIF":
            image.save(output_image_path_with_extension, format=format)
        else:
            image.save(output_image_path_with_extension, format=format, quality=quality)

        image.close()
    except FileNotFoundError as e:
        print(f"File not found: {e.filename}")
    except UnidentifiedImageError as e:
        print(f"Unidentified image error: {input_image_path}")


def convert_images_from_dir(input_dir_path: str, output_dir_path: str, format: str, quality: int = 90) -> None:
    """
    Convert all images in a directory to a specified format with a specified quality.
    Example usage:
        ```python
        convert_dir("input_dir", "output_dir", "WEBP", 90)
        ```
    """

    files = os.listdir(input_dir_path)
    files = filter(lambda file: file.lower().endswith(SUPPORTED_EXTENSIONS), files)

    pool = ThreadPoolExecutor()

    for file in files:
        pool.submit(
            convert_image,
            os.path.join(input_dir_path, file),
            os.path.join(output_dir_path, file),
            format,
            quality
        )

    pool.shutdown(wait=True)
