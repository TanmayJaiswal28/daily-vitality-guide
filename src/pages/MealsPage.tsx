
import React from "react";
import Layout from "@/components/layout/Layout";
import { MealLog } from "@/components/trackers/MealLog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MealsPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold mb-6">Meal Log</h1>
        <Card className="animate-fadeIn">
          <CardHeader>
            <CardTitle>Track Your Meals</CardTitle>
          </CardHeader>
          <CardContent>
            <MealLog />
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default MealsPage;
