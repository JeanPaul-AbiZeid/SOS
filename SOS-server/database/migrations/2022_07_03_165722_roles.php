<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('roles', function (Blueprint $table) {
            $table->id();
            $table->string('role');
            $table->timestamps();
        });

        Schema::table('roles', function (Blueprint $table) {
            DB::table('roles')->insert(['role' => 'help_seeker']);
            DB::table('roles')->insert(['role' => 'policeman']);
            DB::table('roles')->insert(['role' => 'firefighter']);
            DB::table('roles')->insert(['role' => 'rescuer']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('roles');
    }
};
