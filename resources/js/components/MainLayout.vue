<template>

    <el-container  class="vh-100 vw-100">
        <el-aside width="280px" class="bg-dark text-white">
            <div class="d-flex flex-column p-3" >
                <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <svg class="bi pe-none me-2" width="40" height="32">
                        <use xlink:href="#bootstrap" />
                    </svg>
                    <span class="fs-4">Loadash</span>
                </a>
                <hr>
                <ul class="nav nav-pills flex-column mb-auto">
                    <li class="nav-item">
                        <a href="#" class="nav-link active" aria-current="page">
                            <svg class="bi pe-none me-2" width="16" height="16">
                                <use xlink:href="#home" />
                            </svg>
                            Array
                        </a>
                    </li>
                    <li>
                        <a href="#" class="nav-link text-white">
                            <svg class="bi pe-none me-2" width="16" height="16">
                                <use xlink:href="#speedometer2" />
                            </svg>
                            Collections
                        </a>
                    </li>
                    <li>
                        <a href="#" class="nav-link text-white">
                            <svg class="bi pe-none me-2" width="16" height="16">
                                <use xlink:href="#table" />
                            </svg>
                            Function
                        </a>
                    </li>
                    <li>
                        <a href="#" class="nav-link text-white">
                            <svg class="bi pe-none me-2" width="16" height="16">
                                <use xlink:href="#grid" />
                            </svg>
                            Lang
                        </a>
                    </li>
                    <li>
                        <a href="#" class="nav-link text-white">
                            <svg class="bi pe-none me-2" width="16" height="16">
                                <use xlink:href="#people-circle" />
                            </svg>
                            Math
                        </a>
                    </li>
                    <li>
                        <a href="#" class="nav-link text-white">
                            <svg class="bi pe-none me-2" width="16" height="16">
                                <use xlink:href="#people-circle" />
                            </svg>
                            Number
                        </a>
                    </li>
                    <li>
                        <a href="#" class="nav-link text-white">
                            <svg class="bi pe-none me-2" width="16" height="16">
                                <use xlink:href="#people-circle" />
                            </svg>
                            String
                        </a>
                    </li>
                    <li>
                        <a href="#" class="nav-link text-white">
                            <svg class="bi pe-none me-2" width="16" height="16">
                                <use xlink:href="#people-circle" />
                            </svg>
                            Util
                        </a>
                    </li>
                    <li>
                        <a href="#" class="nav-link text-white">
                            <svg class="bi pe-none me-2" width="16" height="16">
                                <use xlink:href="#people-circle" />
                            </svg>
                            Object
                        </a>
                    </li>
                </ul>
                <hr>
            </div>
    
        </el-aside>
        <el-container>
            <el-main>
                <slot/>
            </el-main>
        </el-container>
    </el-container>
    
    
    </template>
    <script setup>
    
    
    </script>