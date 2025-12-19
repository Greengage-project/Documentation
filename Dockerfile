FROM python:3.11-slim

WORKDIR /docs

# Install mkdocs and dependencies
RUN pip install --no-cache-dir mkdocs

# Copy project files
COPY mkdocs.yml .
COPY docs/ docs/

# Expose port for mkdocs serve
EXPOSE 8000

# Start mkdocs development server
CMD ["mkdocs", "serve", "-a", "0.0.0.0:8000"]
