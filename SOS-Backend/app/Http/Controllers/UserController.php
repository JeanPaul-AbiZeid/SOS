<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Role;
use App\Models\User;
use App\Models\Alert;
use App\Models\Cases;

class UserController extends Controller
{
    public function getUserInfo(Request $request){
        $user = User::find($request->id);
    
        return response()->json([
            "status" => "Success",
            "user" => $user
        ], 200);
    }

    public function getAvailable($role_id){
        $experts = User::where('role_id', '=', $role_id)->where('is_available', '=', 2)->get(['id']);
    
        return response()->json([
            "status" => "Success",
            "experts" => $experts
        ], 200);
    }

    public function getAllroles(){
        $role = Role::all();
        
        return response()->json([
            "status" => "Success",
            "roles" => $role
        ], 200);
    }

    public function getAllalerts($id){
    
        $alert = Alert::where('user_id', '!=', $id)->get();
        for ($i = 0; $i < count($alert); $i++){
            $alert[$i]->user_info = User::find($alert[$i]->user_id);
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

    public function updateCase(Request $request) {
        $update = Cases::find($request->id);
        $update->is_done = 2;
        $update->save();
        
        return response()->json([
            "status" => "Success"
        ], 200);
    }

    public function editProfile(Request $request){
        $update = User::find($request->id);
        if ($request->first_name){
            $update->first_name = $request->first_name;
        }
        if ($request->last_name){
            $update->last_name = $request->last_name;
        }
        if ($request->picture){
            $update->picture = $request->picture;
        }
        if ($request->dob){
            $update->dob = $request->dob;
        }
        if ($request->blood_type){
            $update->blood_type = $request->blood_type;
        }
        if ($request->number){
            $update->number = $request->number;
        }
        if ($request->gender){
            $update->gender = $request->gender;
        }
        if ($request->preffered_contact){
            $update->preffered_contact = $request->preffered_contact;
        }
        if ($request->is_available){
            $update->is_available = $request->is_available;
        }
        $update->save();
        
        return response()->json([
            "status" => "Success"
        ], 200);
    }

    public function createCase(Request $request){
        $case = Cases::create([
            'user_id' => $request->user_id,
            'expert_id' => $request->expert_id,
            'user_lat' => $request->user_lat,
            'user_long' => $request->user_long,
            'is_done' => 1
        ]);

        return response()->json([
            "status" => "Success"
        ], 200);
    }

    public function getCases($id){
    
        $cases = Cases::where('expert_id', '=', $id)->where('is_done', '=', 2)->get();
        for ($i = 0; $i < count($cases); $i++){
            $cases[$i]->user_info = User::find($cases[$i]->user_id);
        }
        
        return response()->json([
            "status" => "Success",
            "cases" => $cases
        ], 200);
    }

    public function getCurrentCase($id){
    
        $case = Cases::where('expert_id', '=', $id)->where('is_done', '=' , 1)->get();
        if(count($case) > 0){
            $case[0]->user_info = User::find($case[0]->user_id);
        }
        
        return response()->json([
            "status" => "Success",
            "case" => $case
        ], 200);
    }
}
