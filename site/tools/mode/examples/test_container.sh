#!/bin/bash
#
# Use this script to test a running MODE server on localhost:8080 with testdata

ENDPOINT=localhost:8080/analyze
TESTDATA="2020-07-20-PT.dat.gz"

# If given, use the file from the argument to test
if [ "$#" -eq 0 ]; then
	echo "No arguments supplied, using default testdata ${TESTDATA}"
else
	TESTDATA=$1
fi

curl $ENDPOINT \
	-H "credentials: ASK_MARTIN_STUBENSCHROTT_FOR_CREDENTIALS" \
	-F user=greengage \
	-F data=@${TESTDATA}
