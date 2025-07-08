# GREENENGINE Deployment Guide

This guide explains how to deploy the full **GREENENGINE** toolbox using Docker Compose. The deployment includes authentication, co-production tools, analytics, gamification services, monitoring, and more. It is designed to be **replicable**, **modular**, and **production-ready**.

---

## 📦 Requirements

- Docker ≥ 20.10
- Docker Compose ≥ 1.29
- A Linux-based system (Ubuntu 20.04+, Debian, etc.)
- A valid domain (for HTTPS via Let's Encrypt)
- **Recommended:**`git`, `curl`, and basic CLI tools
- At least 8 GB RAM and 4 vCPU (recommended: 16 GB / 8 vCPU for full stack)

---

## ⚙️ Quick Setup

### 1. Download the docker-compose files and environment configuration sample

```text
https://raw.githubusercontent.com/Greengage-project/Documentation/refs/heads/main/docs/green-engine/docker-compose.yml
https://raw.githubusercontent.com/Greengage-project/Documentation/refs/heads/main/docs/green-engine/.env.sample

```

### 2. Set Up the Environment File

Create a `.env` file by copying the template:

```bash
cp .env.sample .env
```

Edit the file with your preferred editor and configure:

- `MAIN_DOMAIN=yourdomain.com`
- Other required variables (see comments in `.env.sample`)

> ⚠️ **Important**:
> This setup is provided as a boilerplate and can be extended or modified depending on pilot-specific needs.
> New services (e.g., additional data pipelines, frontend modules, edge connectors) can be integrated into the architecture by editing the `docker-compose.yml` file and updating the `.env` configuration accordingly. The platform is designed to be modular and scalable.

### 3. Create Required Docker Networks

Before launching the stack, make sure the required external Docker networks are created. These allow multiple containers to communicate securely across services like the proxy (Traefik) and monitoring tools (Grafana, Prometheus).

Run the following commands:

```bash
docker network create traefik-public
docker network create grafana-network
```

> **Note**:
> These are **external networks**, meaning they must exist **before** running `docker-compose up`.
> If you get an error about missing networks, check their existence with `docker network ls` and recreate them if necessary.

These can be included or ignored depending on the services enabled in your `docker-compose.yml`.

### 4. Start the Full Stack

```bash
docker-compose up -d
```

This command will start over 20 services, including:

- 🔐 Keycloak (auth)
- 📊 Grafana + Prometheus (monitoring)
- ⚙️ Dremio, Matomo, ElasticSearch (analytics)
- 🧠 Gamification engine (Python + postgresql)
- 💬 Loomio, Coproduction backend/frontend
- 🛠️ Traefik (proxy + TLS)
- 🗄️ PostgreSQL, Redis, MongoDB
- 💡 Crontab backups and static volumes

---

## 🧪 Verify Deployment

- Keycloak: `https://auth1.yourdomain.com`
- Frontend: `https://yourdomain.com`
- Monitoring: `https://yourdomain.com/monitoring`
- Gamification (optional route): `/interlink-gamification`

To check logs:

```bash
docker-compose logs -f traefik
```

To see running services:

```bash
docker ps
```

---

## 🔐 HTTPS via Let's Encrypt

Traefik automatically configures HTTPS certificates using the email and domain in `.env`. Make sure ports **80** and **443** are open and your domain points to your host.

---

## 🔁 Replicating to New Environments

1. Copy the repo to the new host.
2. Create a new `.env` file.
3. Repeat the steps from **Quick Setup**.
4. Optionally, adjust volumes or backup paths for multi-node sync.

---

## 🧰 Maintenance

### Restart the stack:

```bash
docker-compose restart
```

### Stop all services:

```bash
docker-compose down
```

### Prune unused resources:

```bash
docker system prune -a
```

---

## 📖 Documentation

📘 Full documentation and advanced setup options are available at:
[https://greengage-project.github.io/Documentation](https://greengage-project.github.io/Documentation)

---

## 👨‍🔧 Support

For technical issues, please open an issue in the repository or contact:

📩 **[greengage.admin@deusto.es](mailto:greengage.admin@deusto.es)**
Maintained by the GREENGAGE
