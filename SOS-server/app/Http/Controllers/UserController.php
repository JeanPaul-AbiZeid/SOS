<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Role;
use App\Models\Alert;

class UserController extends Controller
{
    public function getAllroles(){
        $role = Role::all();
        
        return response()->json([
            "status" => "Success",
            "roles" => $role
        ], 200);
    }

    public function getAllalerts(){
        $alert = Alert::all();
        
        return response()->json([
            "status" => "Success",
            "alerts" => $alert
        ], 200);
    }
}
