<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::prefix('/cards')->group(function () {
    Route::get('/', [\App\Http\Controllers\CardController::class, 'index']);
    Route::post('/', [\App\Http\Controllers\CardController::class, 'store']);
    Route::delete('/{card}', [\App\Http\Controllers\CardController::class, 'destroy']);
});
