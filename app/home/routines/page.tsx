"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function page() {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 p-10">
      <div className="bg-muted/80 rounded-lg p-4 ">
        <p className="font-bold text-2xl text-center">Nutrition Routine</p>
        <div className="space-y-4">
          <div>
            <p className="font-bold text-lg">Habit 1</p>
            <p className="text-gray-600 text-sm">
              Consume at least 40g/day of plant protein. Aim for 1.2-1.6g of
              protein per kg/day.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
