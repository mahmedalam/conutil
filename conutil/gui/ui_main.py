# -*- coding: utf-8 -*-

################################################################################
## Form generated from reading UI file 'ui_main.ui'
##
## Created by: Qt User Interface Compiler version 6.8.1
##
## WARNING! All changes made in this file will be lost when recompiling UI file!
################################################################################

from PySide6.QtCore import (QCoreApplication, QDate, QDateTime, QLocale,
    QMetaObject, QObject, QPoint, QRect,
    QSize, QTime, QUrl, Qt)
from PySide6.QtGui import (QAction, QBrush, QColor, QConicalGradient,
    QCursor, QFont, QFontDatabase, QGradient,
    QIcon, QImage, QKeySequence, QLinearGradient,
    QPainter, QPalette, QPixmap, QRadialGradient,
    QTransform)
from PySide6.QtWidgets import (QApplication, QFrame, QGridLayout, QHBoxLayout,
    QLabel, QMainWindow, QMenu, QMenuBar,
    QPushButton, QScrollArea, QSizePolicy, QSpacerItem,
    QVBoxLayout, QWidget)
import resources_rc

class Ui_ConUtil(object):
    def setupUi(self, ConUtil):
        if not ConUtil.objectName():
            ConUtil.setObjectName(u"ConUtil")
        ConUtil.resize(700, 500)
        ConUtil.setMinimumSize(QSize(700, 500))
        icon = QIcon()
        icon.addFile(u":/Icons/icons/icon.ico", QSize(), QIcon.Mode.Normal, QIcon.State.Off)
        ConUtil.setWindowIcon(icon)
        ConUtil.setStyleSheet(u"* {\n"
"	font-family: Chivo;\n"
"	font-weight: 400;\n"
"	border: 0;\n"
"}\n"
"\n"
"QToolTip {\n"
"    border: 2px solid darkkhaki;\n"
"}\n"
"\n"
"QLabel {\n"
"	color: white;\n"
"	font-size: 14px;\n"
"}\n"
"\n"
"QPushButton {\n"
"	color: white;\n"
"	background-color: transparent;\n"
"	font-size: 16px;\n"
"	font-weight: 500;\n"
"	padding: 8px 16px;\n"
"	border-radius: 20px;\n"
"}\n"
"\n"
"QPushButton:hover {\n"
"	background-color: #EE3F2F;\n"
"}\n"
"\n"
"QScrollBar:vertical {\n"
"	background-color: rgba(255, 255, 255, 10%);\n"
"	width: 18px;\n"
"	padding: 12px 4px;\n"
"}\n"
"\n"
"QScrollBar::handle:vertical {\n"
"	background-color: rgba(255, 255, 255, 90%);\n"
"	min-height: 40px;\n"
"	border-radius: 5px;\n"
"}\n"
"\n"
"QScrollBar::add-line:vertical {\n"
"	background: none;\n"
"	height: 0;\n"
"	subcontrol-position: bottom;\n"
"	subcontrol-origin: margin;\n"
"}\n"
"\n"
"QScrollBar::sub-line:vertical {\n"
"	background: none;\n"
"	height: 0;\n"
"	subcontrol-position: top;\n"
"	subcontrol-origin: margin;\n"
"}\n"
"\n"
""
                        "QScrollBar::add-page:vertical, QScrollBar::sub-page:vertical {\n"
"	background: none;\n"
"}\n"
"\n"
"#scrollArea {\n"
"	background-color: transparent;\n"
"}\n"
"\n"
"#scrollAreaWidgetContents_Main > QFrame {\n"
"	border-radius: 4px;\n"
"}\n"
"\n"
"#scrollAreaWidgetContents_Main > QFrame:hover {\n"
"	background-color: rgba(255, 255, 255, 10%);\n"
"}\n"
"\n"
"#centralwidget {\n"
"	background-color: #0D0A09;\n"
"}\n"
"\n"
"#widget_Header {\n"
"	border-bottom: 1px solid rgba(237, 63, 47, 50%);\n"
"}\n"
"\n"
"#widget_Footer {\n"
"	border-top: 1px solid rgba(237, 63, 47, 50%);\n"
"}\n"
"\n"
"#pushButton_SetOutputPath {\n"
"	color: white;\n"
"	background-color: transparent;\n"
"	font-size: 14px;\n"
"	font-weight: 400;\n"
"	text-align: left;\n"
"	padding: 6px 12px;\n"
"	border: 2px solid #EE3F2F;\n"
"	border-radius: 4px;\n"
"}\n"
"\n"
"#pushButton_SetOutputPath:hover {\n"
"	background-color: rgba(237, 63, 47, 10%);\n"
"}\n"
"\n"
"#pushButton_Export {\n"
"	color: white;\n"
"	background: qlineargradient(spread:pad, x1:0"
                        ", y1:0, x2:1, y2:0, stop:0 rgba(238, 63, 47, 255), stop:1 rgba(249, 123, 112, 255));\n"
"	font-size: 16px;\n"
"	font-weight: 500;\n"
"	padding: 8px 16px;\n"
"	border-radius: 20px;\n"
"}\n"
"\n"
"#pushButton_Export:hover {\n"
"	background: qlineargradient(spread:pad, x1:0, y1:0, x2:1, y2:0, stop:0 rgba(249, 123, 112, 255), stop:1 rgba(238, 63, 47, 255));\n"
"}")
        self.action_AddImage = QAction(ConUtil)
        self.action_AddImage.setObjectName(u"action_AddImage")
        icon1 = QIcon()
        icon1.addFile(u":/Icons/icons/image-plus.svg", QSize(), QIcon.Mode.Normal, QIcon.State.Off)
        self.action_AddImage.setIcon(icon1)
        self.action_AddFolder = QAction(ConUtil)
        self.action_AddFolder.setObjectName(u"action_AddFolder")
        icon2 = QIcon()
        icon2.addFile(u":/Icons/icons/folder-plus.svg", QSize(), QIcon.Mode.Normal, QIcon.State.Off)
        self.action_AddFolder.setIcon(icon2)
        self.action_About = QAction(ConUtil)
        self.action_About.setObjectName(u"action_About")
        icon3 = QIcon()
        icon3.addFile(u":/Icons/icons/info.svg", QSize(), QIcon.Mode.Normal, QIcon.State.Off)
        self.action_About.setIcon(icon3)
        self.action_ConUtilWebsite = QAction(ConUtil)
        self.action_ConUtilWebsite.setObjectName(u"action_ConUtilWebsite")
        icon4 = QIcon()
        icon4.addFile(u":/Icons/icons/globe.svg", QSize(), QIcon.Mode.Normal, QIcon.State.Off)
        self.action_ConUtilWebsite.setIcon(icon4)
        self.action_KeyboardShortcuts = QAction(ConUtil)
        self.action_KeyboardShortcuts.setObjectName(u"action_KeyboardShortcuts")
        icon5 = QIcon()
        icon5.addFile(u":/Icons/icons/keyboard.svg", QSize(), QIcon.Mode.Normal, QIcon.State.Off)
        self.action_KeyboardShortcuts.setIcon(icon5)
        self.action_Quit = QAction(ConUtil)
        self.action_Quit.setObjectName(u"action_Quit")
        icon6 = QIcon()
        icon6.addFile(u":/Icons/icons/power.svg", QSize(), QIcon.Mode.Normal, QIcon.State.Off)
        self.action_Quit.setIcon(icon6)
        self.action_ConUtilSettings = QAction(ConUtil)
        self.action_ConUtilSettings.setObjectName(u"action_ConUtilSettings")
        icon7 = QIcon()
        icon7.addFile(u":/Icons/icons/settings.svg", QSize(), QIcon.Mode.Normal, QIcon.State.Off)
        self.action_ConUtilSettings.setIcon(icon7)
        self.action_Export = QAction(ConUtil)
        self.action_Export.setObjectName(u"action_Export")
        icon8 = QIcon()
        icon8.addFile(u":/Icons/icons/folder-input.svg", QSize(), QIcon.Mode.Normal, QIcon.State.Off)
        self.action_Export.setIcon(icon8)
        self.centralwidget = QWidget(ConUtil)
        self.centralwidget.setObjectName(u"centralwidget")
        self.verticalLayout = QVBoxLayout(self.centralwidget)
        self.verticalLayout.setSpacing(0)
        self.verticalLayout.setObjectName(u"verticalLayout")
        self.verticalLayout.setContentsMargins(0, 0, 0, 0)
        self.widget_Header = QWidget(self.centralwidget)
        self.widget_Header.setObjectName(u"widget_Header")
        self.widget_Header.setMinimumSize(QSize(0, 63))
        self.widget_Header.setMaximumSize(QSize(16777215, 63))
        self.widget_Header.setStyleSheet(u"")
        self.horizontalLayout = QHBoxLayout(self.widget_Header)
        self.horizontalLayout.setSpacing(0)
        self.horizontalLayout.setObjectName(u"horizontalLayout")
        self.horizontalLayout.setContentsMargins(32, 8, 32, 8)
        self.label_Logo = QLabel(self.widget_Header)
        self.label_Logo.setObjectName(u"label_Logo")
        self.label_Logo.setMinimumSize(QSize(97, 0))
        self.label_Logo.setStyleSheet(u"image: url(:/Images/images/logo.png);")

        self.horizontalLayout.addWidget(self.label_Logo)

        self.horizontalSpacer = QSpacerItem(40, 20, QSizePolicy.Policy.Expanding, QSizePolicy.Policy.Minimum)

        self.horizontalLayout.addItem(self.horizontalSpacer)

        self.frame_Header_Right = QFrame(self.widget_Header)
        self.frame_Header_Right.setObjectName(u"frame_Header_Right")
        self.frame_Header_Right.setFrameShape(QFrame.StyledPanel)
        self.frame_Header_Right.setFrameShadow(QFrame.Raised)
        self.horizontalLayout_2 = QHBoxLayout(self.frame_Header_Right)
        self.horizontalLayout_2.setSpacing(16)
        self.horizontalLayout_2.setObjectName(u"horizontalLayout_2")
        self.horizontalLayout_2.setContentsMargins(0, 0, 0, 0)
        self.pushButton_AddImage = QPushButton(self.frame_Header_Right)
        self.pushButton_AddImage.setObjectName(u"pushButton_AddImage")
        self.pushButton_AddImage.setCursor(QCursor(Qt.CursorShape.PointingHandCursor))
        icon9 = QIcon()
        icon9.addFile(u":/Icons/icons/image-plus-white.svg", QSize(), QIcon.Mode.Normal, QIcon.State.Off)
        self.pushButton_AddImage.setIcon(icon9)
        self.pushButton_AddImage.setIconSize(QSize(24, 24))

        self.horizontalLayout_2.addWidget(self.pushButton_AddImage)

        self.pushButton_AddFolder = QPushButton(self.frame_Header_Right)
        self.pushButton_AddFolder.setObjectName(u"pushButton_AddFolder")
        self.pushButton_AddFolder.setCursor(QCursor(Qt.CursorShape.PointingHandCursor))
        icon10 = QIcon()
        icon10.addFile(u":/Icons/icons/folder-plus-white.svg", QSize(), QIcon.Mode.Normal, QIcon.State.Off)
        self.pushButton_AddFolder.setIcon(icon10)
        self.pushButton_AddFolder.setIconSize(QSize(24, 24))

        self.horizontalLayout_2.addWidget(self.pushButton_AddFolder)


        self.horizontalLayout.addWidget(self.frame_Header_Right)


        self.verticalLayout.addWidget(self.widget_Header)

        self.scrollArea = QScrollArea(self.centralwidget)
        self.scrollArea.setObjectName(u"scrollArea")
        self.scrollArea.setMinimumSize(QSize(0, 50))
        self.scrollArea.setStyleSheet(u"")
        self.scrollArea.setVerticalScrollBarPolicy(Qt.ScrollBarAsNeeded)
        self.scrollArea.setHorizontalScrollBarPolicy(Qt.ScrollBarAlwaysOff)
        self.scrollArea.setWidgetResizable(True)
        self.scrollAreaWidgetContents_Main = QWidget()
        self.scrollAreaWidgetContents_Main.setObjectName(u"scrollAreaWidgetContents_Main")
        self.scrollAreaWidgetContents_Main.setGeometry(QRect(0, 0, 700, 344))
        self.gridLayout_Main = QGridLayout(self.scrollAreaWidgetContents_Main)
        self.gridLayout_Main.setSpacing(10)
        self.gridLayout_Main.setObjectName(u"gridLayout_Main")
        self.gridLayout_Main.setContentsMargins(32, 24, 32, 24)
        self.scrollArea.setWidget(self.scrollAreaWidgetContents_Main)

        self.verticalLayout.addWidget(self.scrollArea)

        self.widget_Footer = QWidget(self.centralwidget)
        self.widget_Footer.setObjectName(u"widget_Footer")
        self.widget_Footer.setMinimumSize(QSize(0, 68))
        self.widget_Footer.setMaximumSize(QSize(16777215, 68))
        self.widget_Footer.setStyleSheet(u"")
        self.horizontalLayout_3 = QHBoxLayout(self.widget_Footer)
        self.horizontalLayout_3.setSpacing(24)
        self.horizontalLayout_3.setObjectName(u"horizontalLayout_3")
        self.horizontalLayout_3.setContentsMargins(32, 13, 32, 13)
        self.frame_Footer_Left = QFrame(self.widget_Footer)
        self.frame_Footer_Left.setObjectName(u"frame_Footer_Left")
        self.frame_Footer_Left.setFrameShape(QFrame.StyledPanel)
        self.frame_Footer_Left.setFrameShadow(QFrame.Raised)
        self.horizontalLayout_4 = QHBoxLayout(self.frame_Footer_Left)
        self.horizontalLayout_4.setSpacing(12)
        self.horizontalLayout_4.setObjectName(u"horizontalLayout_4")
        self.horizontalLayout_4.setContentsMargins(0, 0, 0, 0)
        self.label_Output = QLabel(self.frame_Footer_Left)
        self.label_Output.setObjectName(u"label_Output")
        self.label_Output.setMaximumSize(QSize(51, 16777215))
        self.label_Output.setStyleSheet(u"")

        self.horizontalLayout_4.addWidget(self.label_Output)

        self.pushButton_SetOutputPath = QPushButton(self.frame_Footer_Left)
        self.pushButton_SetOutputPath.setObjectName(u"pushButton_SetOutputPath")
        font = QFont()
        font.setFamilies([u"Chivo"])
        font.setBold(False)
        self.pushButton_SetOutputPath.setFont(font)
        self.pushButton_SetOutputPath.setCursor(QCursor(Qt.CursorShape.PointingHandCursor))
        icon11 = QIcon()
        icon11.addFile(u":/Icons/icons/folder-input-white.svg", QSize(), QIcon.Mode.Normal, QIcon.State.Off)
        self.pushButton_SetOutputPath.setIcon(icon11)
        self.pushButton_SetOutputPath.setIconSize(QSize(24, 24))

        self.horizontalLayout_4.addWidget(self.pushButton_SetOutputPath)


        self.horizontalLayout_3.addWidget(self.frame_Footer_Left)

        self.pushButton_Export = QPushButton(self.widget_Footer)
        self.pushButton_Export.setObjectName(u"pushButton_Export")
        self.pushButton_Export.setMinimumSize(QSize(140, 41))
        self.pushButton_Export.setMaximumSize(QSize(114, 16777215))
        font1 = QFont()
        font1.setFamilies([u"Chivo"])
        font1.setBold(True)
        self.pushButton_Export.setFont(font1)
        self.pushButton_Export.setCursor(QCursor(Qt.CursorShape.PointingHandCursor))
        self.pushButton_Export.setStyleSheet(u"")

        self.horizontalLayout_3.addWidget(self.pushButton_Export)


        self.verticalLayout.addWidget(self.widget_Footer)

        ConUtil.setCentralWidget(self.centralwidget)
        self.menubar = QMenuBar(ConUtil)
        self.menubar.setObjectName(u"menubar")
        self.menubar.setGeometry(QRect(0, 0, 700, 25))
        self.menufile = QMenu(self.menubar)
        self.menufile.setObjectName(u"menufile")
        self.menuShortcuts = QMenu(self.menubar)
        self.menuShortcuts.setObjectName(u"menuShortcuts")
        self.menuAbout = QMenu(self.menubar)
        self.menuAbout.setObjectName(u"menuAbout")
        self.menuSettings = QMenu(self.menubar)
        self.menuSettings.setObjectName(u"menuSettings")
        ConUtil.setMenuBar(self.menubar)

        self.menubar.addAction(self.menufile.menuAction())
        self.menubar.addAction(self.menuShortcuts.menuAction())
        self.menubar.addAction(self.menuSettings.menuAction())
        self.menubar.addAction(self.menuAbout.menuAction())
        self.menufile.addAction(self.action_AddImage)
        self.menufile.addAction(self.action_AddFolder)
        self.menufile.addAction(self.action_Export)
        self.menufile.addSeparator()
        self.menufile.addAction(self.action_Quit)
        self.menuShortcuts.addAction(self.action_KeyboardShortcuts)
        self.menuAbout.addAction(self.action_About)
        self.menuAbout.addAction(self.action_ConUtilWebsite)
        self.menuSettings.addAction(self.action_ConUtilSettings)

        self.retranslateUi(ConUtil)

        QMetaObject.connectSlotsByName(ConUtil)
    # setupUi

    def retranslateUi(self, ConUtil):
        ConUtil.setWindowTitle(QCoreApplication.translate("ConUtil", u"ConUtil", None))
        self.action_AddImage.setText(QCoreApplication.translate("ConUtil", u"Add Image", None))
#if QT_CONFIG(shortcut)
        self.action_AddImage.setShortcut(QCoreApplication.translate("ConUtil", u"Ctrl+O", None))
#endif // QT_CONFIG(shortcut)
        self.action_AddFolder.setText(QCoreApplication.translate("ConUtil", u"Add Folder", None))
#if QT_CONFIG(shortcut)
        self.action_AddFolder.setShortcut(QCoreApplication.translate("ConUtil", u"Ctrl+F", None))
#endif // QT_CONFIG(shortcut)
        self.action_About.setText(QCoreApplication.translate("ConUtil", u"About", None))
#if QT_CONFIG(shortcut)
        self.action_About.setShortcut(QCoreApplication.translate("ConUtil", u"F1", None))
#endif // QT_CONFIG(shortcut)
        self.action_ConUtilWebsite.setText(QCoreApplication.translate("ConUtil", u"ConUtil Website", None))
#if QT_CONFIG(shortcut)
        self.action_ConUtilWebsite.setShortcut(QCoreApplication.translate("ConUtil", u"Ctrl+W", None))
#endif // QT_CONFIG(shortcut)
        self.action_KeyboardShortcuts.setText(QCoreApplication.translate("ConUtil", u"Keyboard Shortcuts", None))
#if QT_CONFIG(shortcut)
        self.action_KeyboardShortcuts.setShortcut(QCoreApplication.translate("ConUtil", u"Ctrl+K", None))
#endif // QT_CONFIG(shortcut)
        self.action_Quit.setText(QCoreApplication.translate("ConUtil", u"Quit", None))
#if QT_CONFIG(shortcut)
        self.action_Quit.setShortcut(QCoreApplication.translate("ConUtil", u"Ctrl+Q", None))
#endif // QT_CONFIG(shortcut)
        self.action_ConUtilSettings.setText(QCoreApplication.translate("ConUtil", u"ConUtil Settings", None))
#if QT_CONFIG(shortcut)
        self.action_ConUtilSettings.setShortcut(QCoreApplication.translate("ConUtil", u"Ctrl+I", None))
#endif // QT_CONFIG(shortcut)
        self.action_Export.setText(QCoreApplication.translate("ConUtil", u"Export", None))
#if QT_CONFIG(shortcut)
        self.action_Export.setShortcut(QCoreApplication.translate("ConUtil", u"Ctrl+E", None))
#endif // QT_CONFIG(shortcut)
        self.label_Logo.setText("")
        self.pushButton_AddImage.setText(QCoreApplication.translate("ConUtil", u"Add Image", None))
        self.pushButton_AddFolder.setText(QCoreApplication.translate("ConUtil", u"Add Folder", None))
        self.label_Output.setText(QCoreApplication.translate("ConUtil", u"Output:", None))
        self.pushButton_SetOutputPath.setText(QCoreApplication.translate("ConUtil", u"C:Users\\Ahmed\\Documents\\ConUtil", None))
        self.pushButton_Export.setText(QCoreApplication.translate("ConUtil", u"Export", None))
        self.menufile.setTitle(QCoreApplication.translate("ConUtil", u"File", None))
        self.menuShortcuts.setTitle(QCoreApplication.translate("ConUtil", u"Shortcuts", None))
        self.menuAbout.setTitle(QCoreApplication.translate("ConUtil", u"Help", None))
        self.menuSettings.setTitle(QCoreApplication.translate("ConUtil", u"Settings", None))
    # retranslateUi

