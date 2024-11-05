terraform {
  required_providers {
    docker = {
      source  = "kreuzwerker/docker"
      version = "~> 2.24.0"
    }
  }
  required_version = ">= 1.0.0"
}

provider "docker" {
  
}

resource "docker_image" "app_image" {
  name         = "nextjs_app_image"
  build {
    context    = "${path.module}"
    dockerfile = "Dockerfile"
  }
}

resource "docker_container" "app_container" {
  name  = "nextjs_app_container"
  image = docker_image.app_image.latest

  env = [
    "NODE_ENV=production",
    "PORT=3000",
    "HOSTNAME=0.0.0.0"
  ]

  ports {
    internal = 3000
    external = 3000
  }
}
