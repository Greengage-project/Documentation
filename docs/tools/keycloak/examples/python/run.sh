#!/bin/bash
docker-compose down
docker-compose up --build -d
python index.py