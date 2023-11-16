# Greengage Project Documentation

## Introduction

Welcome to the documentation repository for the Greengage Project. This repository serves as a comprehensive guide covering various aspects and tools used within the Greengage Project.

## Repository Structure

The repository is organized into the following sections:

- **docs**: Contains the main documentation files.

  - **css**: Custom CSS styling for the documentation.
  - **guidelines.md**: General guidelines for the project.
  - **index.md**: The main entry point for the documentation.
  - **tools**: Detailed documentation for various tools used in the project.
    - **TOOLNAME_template**: A template structure for documenting other tools.

- **mkdocs.yml**: MkDocs configuration file for setting up the documentation site.

## Running Locally

To run this documentation locally:

1. Clone the repository to your local machine.
2. Navigate to the root directory.
3. Run `mkdocs serve` to start the local server.
4. Visit `http://localhost:8000` in your browser to view the documentation.

## GitHub Action Workflow

This project uses GitHub Actions for continuous integration and deployment. The workflow automates the process of testing, building, and deploying the documentation to GitHub Pages.

- On every push to the `main` branch, GitHub Actions builds the project using MkDocs.
- The built documentation is then deployed to GitHub Pages.

## Viewing the Documentation Online

The deployed documentation is accessible at [Greengage Project Documentation](https://greengage-project.github.io/Documentation/).

## Contributing

Contributions to improve or expand the documentation are welcome. Please follow the standard procedures for submitting pull requests.

## Contact

For more information or queries, please contact greengage.admin@deusto.es.
