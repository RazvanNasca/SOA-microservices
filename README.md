# SOA-microservices by Nașca Răzvan-Alexandru

# MicroServices Application Documentation
This document provides an overview of the Micro Service application, its architecture and how to run and develop it.

# Overview 
The MicroServicess application is an application written in NodeJs that uses microservices to create a modular architecture. It consists of three micro services:
1.	Host MicroService: The main application server that provides all APIs
2.	Products MicroService: Provides products APIs
3.	Order MicroService: Provides orders APIs

# Architecture
The MicroServices application architecture follows the MicroServices pattern. Each project is developed and deployed independently, and communicates with the other micro services through the Host MicroService.

All this microservices run on different ports:
1.	Host MicroService: `8080`
2.	Products MicroService: `8081`
3.	Order MicroService: `8082`

# Installation

## Prerequisites:
1.	NodeJS
2.	Docker
3.	Docker Compose

From the root project, run the following commands:
1.	`docker-compose buil`
2.	`docker-compose up`

Than you will the following APIs:
1.	`localhost:8080/getAllProducts`
2.	`localhost:8080/getProductsInCart`
3.	`localhost:8080/addProductToCart`
4.	`localhost:8080/sendOrder`
5.	`localhost:8081/sendOrder`
6.	`localhost:8082/products`
7.	`localhost:8082/products/addToCart`
8.	`localhost:8082/products/productsInCart`
