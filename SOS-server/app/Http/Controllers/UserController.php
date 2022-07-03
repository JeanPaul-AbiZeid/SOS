<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Role;

class UserController extends Controller
{
    public function getAllroles(){
        $role = Role::all();
        
        return response()->json([
            "status" => "Success",
            "roles" => $role
        ], 200);
    }
}
