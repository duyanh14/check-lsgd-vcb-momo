# 
```bash
sudo docker-compose -f docker-compose.server.yml -f docker-compose.frontend.yml -f docker-compose.cron.yml --env-file ./client/.env build
sudo docker-compose -f docker-compose.server.yml -f docker-compose.frontend.yml -f docker-compose.cron.yml --env-file ./client/.env up -d

docker-compose -f docker-compose.cron.yml --env-file ./client/.env up -d 
```

nano ~/.env

sudo cp ~/.env ~/check-lsgd-vcb-momo/cron
sudo cp ~/.env ~/check-lsgd-vcb-momo/client

nano ~/check-lsgd-vcb-momo/cron/.env
nano ~/check-lsgd-vcb-momo/client/.env

nano check-lsgd-vcb-momo/server/momo-api/src/getotp.php


--env-file ./check-lsgd-frontend/.env up 

# MOMO
## Getting started
```bash
docker-compose -f docker-compose.momo.yml up -d
```
Find in 
> momo-backend/momo-api/src/getotp.php

line 10

> $result = $app->LoadData('your-momo-number')->sendOTP();

replace your-momo-number 

## Get error "bạn đang sử dụng phiên bản cũ"

Open MOMO on your device and find the new version number and replace these ones in 
> momo-backend/momo-api/src/class.momo-new.php
 
(about 30 records)

```
'appVer' => 31161,
'appCode' => '3.1.16',
```

# VCB
```bash
docker-compose -f .\docker-compose.vcb.yml up -d
```

# Frontend
```bash
docker-compose -f .\docker-compose.frontend.yml up -d
```