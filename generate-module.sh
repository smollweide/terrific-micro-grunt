#!/bin/bash

# Config, Paths
DIR_SRC="generator/terrific-module"
DIR_MODULES="modules"
DIR_STYLES="css"
DIR_SCRIPTS="js"
DIR_TESTS="tests"
FILE_MODULE="module"
FILE_TRIGGER="cache/triggerfile"
TPL_NAME_MODULE_LOWER="modulename"
TPL_NAME_MODULE_UCFIRST="ModuleName"
TPL_NAME_SKIN_LOWER="skinname"
TPL_NAME_SKIN_UCFIRST="SkinName"

# Arguments
NAME_MODULE="$1"
NAME_SKIN="$2"

# Sanitize inputs
NAME_MODULE_LOWER=$(echo $NAME_MODULE | awk '{ print tolower($0); } ')
NAME_MODULE_UCFIRST=$(echo $NAME_MODULE_LOWER | awk '{ printf("%s%s", toupper( substr($0,1,1) ), substr($0,2)); } ')
NAME_SKIN_LOWER=$(echo $NAME_SKIN | awk '{ print tolower($0); } ')
NAME_SKIN_UCFIRST=$(echo $NAME_SKIN_LOWER | awk '{ printf("%s%s", toupper( substr($0,1,1) ), substr($0,2)); } ')

TARGET_DIR="${DIR_MODULES}/${NAME_MODULE}"
TARGET_TPL="${TARGET_DIR}/${NAME_MODULE_LOWER}.html"
TARGET_MODULE_STYLES="${TARGET_DIR}/${DIR_STYLES}/${NAME_MODULE_LOWER}.less"
TARGET_MODULE_SCRIPTS="${TARGET_DIR}/${DIR_SCRIPTS}/${NAME_MODULE_LOWER}.js"
TARGET_MODULE_TESTS_JS="${TARGET_DIR}/${DIR_TESTS}/${NAME_MODULE_LOWER}.tests.js"
TARGET_MODULE_TESTS_HTML="${TARGET_DIR}/${DIR_TESTS}/${NAME_MODULE_LOWER}.tests.html"

echo ".........................................................................."
echo ""

echo "# Create Module Files:"

# Create Module Directories
mkdir -v -p $TARGET_DIR/$DIR_STYLES $TARGET_DIR/$DIR_SCRIPTS $TARGET_DIR/$DIR_TESTS

# Copy Module Files
cp -n -v $DIR_SRC/$FILE_MODULE.html  $TARGET_TPL
cp -n -v $DIR_SRC/$FILE_MODULE.less $TARGET_MODULE_STYLES
cp -n -v $DIR_SRC/$FILE_MODULE.js   $TARGET_MODULE_SCRIPTS
cp -n -v $DIR_SRC/$FILE_MODULE.tests.js   $TARGET_MODULE_TESTS_JS
cp -n -v $DIR_SRC/$FILE_MODULE.tests.html   $TARGET_MODULE_TESTS_HTML
echo "-> done"
echo ""

# Replace Module Name
echo "# Replace Module Name:"
sed -i '' "s/${TPL_NAME_MODULE_UCFIRST}/${NAME_MODULE_UCFIRST}/g" ${TARGET_TPL}
sed -i '' "s/${TPL_NAME_MODULE_LOWER}/${NAME_MODULE_LOWER}/g" ${TARGET_MODULE_STYLES}
sed -i '' "s/${TPL_NAME_MODULE_UCFIRST}/${NAME_MODULE_UCFIRST}/g" ${TARGET_MODULE_SCRIPTS}
sed -i '' "s/${TPL_NAME_MODULE_UCFIRST}/${NAME_MODULE_UCFIRST}/g" ${TARGET_MODULE_TESTS_JS}
sed -i '' "s/${TPL_NAME_MODULE_UCFIRST}/${NAME_MODULE_UCFIRST}/g" ${TARGET_MODULE_TESTS_HTML}
echo "-> done"
echo ""

# Skin
if [ ! -z "$NAME_SKIN_LOWER" ]
then
	TARGET_SKIN_STYLES="${TARGET_DIR}/${DIR_STYLES}/${NAME_MODULE_LOWER}.skin.${NAME_SKIN_LOWER}.less"
	TARGET_SKIN_SCRIPTS="${TARGET_DIR}/${DIR_SCRIPTS}/${NAME_MODULE_LOWER}.skin.${NAME_SKIN_LOWER}.js"

	echo "# Create Skin Files:"
	# Copy Skin Files
	cp -n -v $DIR_SRC/$FILE_MODULE.skin.$TPL_NAME_SKIN_LOWER.less $TARGET_SKIN_STYLES
	cp -n -v $DIR_SRC/$FILE_MODULE.skin.$TPL_NAME_SKIN_LOWER.js   $TARGET_SKIN_SCRIPTS
	echo "-> done"
	echo ""

	# Replace Skin Name
	echo "# Replace Skin Name:"
	sed -i '' "s/${TPL_NAME_MODULE_LOWER}/${NAME_MODULE_LOWER}/g" ${TARGET_SKIN_STYLES}
	sed -i '' "s/${TPL_NAME_SKIN_LOWER}/${NAME_SKIN_LOWER}/g" ${TARGET_SKIN_STYLES}
	sed -i '' "s/${TPL_NAME_MODULE_UCFIRST}/${NAME_MODULE_UCFIRST}/g" ${TARGET_SKIN_SCRIPTS}
	sed -i '' "s/${TPL_NAME_SKIN_UCFIRST}/${NAME_SKIN_UCFIRST}/g" ${TARGET_SKIN_SCRIPTS}
	echo "-> done"
	echo ""
fi

# Touch trigger
echo "# Touch Trigger"
touch $FILE_TRIGGER
echo "-> done"
echo ""
