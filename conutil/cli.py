from argparse import ArgumentParser
import os

from conutil import convert_image, convert_images_from_dir


def cli():
    parser = ArgumentParser()
    parser.add_argument("-v", "--version", action="version", version="1.0.0")
    parser.add_argument("-i", "--input", help="Filename of an image or Directory of images for conversion",
                        required=True)
    parser.add_argument("-f", "--output_format", help="Format to convert", required=False)
    parser.add_argument("-q", "--quality", help="Quality of images to convert", required=False)
    parser.add_argument("-o", "--output", help="Output directory or filename", required=True)
    args = parser.parse_args()

    if args.quality is None:
        args.quality = 90

    if args.input:
        if not os.path.isdir(args.input):
            convert_image(args.input, args.output, args.output.split(".")[-1], args.quality)
        else:
            if args.output_format is None:
                raise Exception("Output format is required when input is a directory.")
            if not os.path.exists(args.output):
                os.makedirs(args.output)
            convert_images_from_dir(args.input, args.output, args.output_format, args.quality)
    else:
        raise Exception("No input provided to convert.")


if __name__ == "__main__":
    cli()
