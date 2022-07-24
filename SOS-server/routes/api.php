<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;


Route::controller(AuthController::class)->group(function () {
    Route::post('login', 'login');
    Route::post('register', 'register');
    Route::post('logout', 'logout');
    Route::post('refresh', 'refresh');
    Route::get('roles', 'getAllroles');

});

Route::controller(UserController::class)->group(function () {
    Route::get('/getroles', 'getAllroles');
    Route::get('/getalerts/{id}', 'getAllalerts');
    Route::post('/createalert', 'createAlert');
    Route::post('/userinfo', 'getUserInfo');
});