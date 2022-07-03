<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Role;
use App\Models\User;
use App\Models\Alert;

class UserController extends Controller
{
    public function getUserInfo(Request $request){
        $user = User::find($request->id);
    
        return response()->json([
            "status" => "Success",
            "user" => $user
        ], 200);
    }

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
            $alert->user_info = User::find($alert->user_id);
        }else{
            $alert = Alert::all();
            for ($i = 0; $i < count($alert); $i++){
                $alert[$i]->user_info = User::find($alert[$i]->user_id);
            }
            
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
