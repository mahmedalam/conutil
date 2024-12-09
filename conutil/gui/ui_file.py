from PySide6.QtCore import QSize
from PySide6.QtGui import Qt
from PySide6.QtWidgets import QFrame, QVBoxLayout, QLabel


class UiFile(QFrame):
    """UI for file card."""

    def __init__(self, filename: str, location: str, parent=None):
        """
        Initialize UI.
        Args: filename, location, parent?
        """
        super().__init__(parent)
        self.filename = filename
        self.location = location
        self.setObjectName("frame_ImageCard")
        self.setMinimumSize(QSize(200, 200))
        self.setMaximumSize(QSize(200, 200))

        self.verticalLayout = QVBoxLayout(self)
        self.verticalLayout.setSpacing(8)
        self.verticalLayout.setObjectName("verticalLayout_ImageCard")
        self.verticalLayout.setContentsMargins(12, 12, 12, 12)

        self.label_Image = QLabel(self)
        self.label_Image.setObjectName("label_Image")
        self.label_Image.setStyleSheet(f"image: url({self.location});")

        self.label_Filename = QLabel(self)
        self.label_Filename.setObjectName("label_Filename")
        self.label_Filename.setMinimumSize(QSize(0, 36))
        self.label_Filename.setMaximumSize(QSize(16777215, 36))
        self.label_Filename.setAlignment(
            Qt.AlignmentFlag.AlignLeading | Qt.AlignmentFlag.AlignLeft | Qt.AlignmentFlag.AlignTop
        )
        self.label_Filename.setWordWrap(True)

        self.label_Filename.setText(self.filename)
        self.verticalLayout.addWidget(self.label_Image)
        self.verticalLayout.addWidget(self.label_Filename)
