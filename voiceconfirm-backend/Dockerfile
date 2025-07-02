# Use official Python image
FROM python:3.11-slim

# Set working directory
WORKDIR /app

# Install system dependencies (if needed, like gcc for some Python libs)
RUN apt-get update && apt-get install -y build-essential

# Copy requirements and install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy project files (ignore venv)
COPY . .

# Expose port (adjust if different)
EXPOSE 8000

# Start the backend server (adjust if your entry point is different)
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
