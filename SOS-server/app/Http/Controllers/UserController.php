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

    public function getAllalerts($id = null){
        if($id != null){
            $alert = Alert::find($id);
        }else{
            $alert = Alert::all();
        }
        
        return response()->json([
            "status" => "Success",
            "alerts" => $alert
        ], 200);
    }

    public function createAlert(Request $request){
        $alert = Alert::create([
            'title' => $request->title,
            'description' => $request->description,
            'image' => $request->image,
            'user_id' => $request->user_id
        ]);

        return response()->json([
            "status" => "Success"
        ], 200);
    }
}
