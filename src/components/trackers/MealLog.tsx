
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Utensils, Cake, Coffee, Sandwich } from "lucide-react";

type Meal = {
  id: number;
  name: string;
  description: string;
  calories: number;
  time: string;
  date: string;
  mealType: "breakfast" | "lunch" | "dinner" | "snack";
};

const mealTypeIcons = {
  breakfast: <Coffee className="h-4 w-4" />,
  lunch: <Sandwich className="h-4 w-4" />,
  dinner: <Utensils className="h-4 w-4" />,
  snack: <Cake className="h-4 w-4" />
};

export const MealLog = () => {
  const [meals, setMeals] = useState<Meal[]>([
    {
      id: 1,
      name: "Oatmeal with fruits",
      description: "Steel cut oats with banana, berries and honey",
      calories: 320,
      time: "08:30",
      date: "2025-05-18",
      mealType: "breakfast"
    },
    {
      id: 2,
      name: "Chicken salad",
      description: "Grilled chicken breast with mixed greens and balsamic dressing",
      calories: 450,
      time: "12:30",
      date: "2025-05-18",
      mealType: "lunch"
    }
  ]);

  const [newMeal, setNewMeal] = useState<Omit<Meal, "id">>({
    name: "",
    description: "",
    calories: 0,
    time: "",
    date: new Date().toISOString().split('T')[0],
    mealType: "breakfast"
  });

  const handleAddMeal = () => {
    if (newMeal.name.trim() === "") return;
    
    setMeals([
      ...meals,
      {
        ...newMeal,
        id: meals.length > 0 ? Math.max(...meals.map(meal => meal.id)) + 1 : 1
      }
    ]);
    
    setNewMeal({
      name: "",
      description: "",
      calories: 0,
      time: "",
      date: new Date().toISOString().split('T')[0],
      mealType: "breakfast"
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewMeal({
      ...newMeal,
      [name]: name === "calories" ? parseInt(value) || 0 : value
    });
  };

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Meal Name
            </label>
            <Input
              id="name"
              name="name"
              value={newMeal.name}
              onChange={handleInputChange}
              placeholder="What did you eat?"
            />
          </div>
          
          <div>
            <label htmlFor="description" className="block text-sm font-medium mb-1">
              Description
            </label>
            <Textarea
              id="description"
              name="description"
              value={newMeal.description}
              onChange={handleInputChange}
              placeholder="Add details about your meal..."
              rows={3}
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="calories" className="block text-sm font-medium mb-1">
                Calories
              </label>
              <Input
                id="calories"
                name="calories"
                type="number"
                value={newMeal.calories}
                onChange={handleInputChange}
                placeholder="Calories"
              />
            </div>
            <div>
              <label htmlFor="time" className="block text-sm font-medium mb-1">
                Time
              </label>
              <Input
                id="time"
                name="time"
                type="time"
                value={newMeal.time}
                onChange={handleInputChange}
              />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="date" className="block text-sm font-medium mb-1">
                Date
              </label>
              <Input
                id="date"
                name="date"
                type="date"
                value={newMeal.date}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="mealType" className="block text-sm font-medium mb-1">
                Meal Type
              </label>
              <select
                id="mealType"
                name="mealType"
                value={newMeal.mealType}
                onChange={handleInputChange}
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <option value="breakfast">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="dinner">Dinner</option>
                <option value="snack">Snack</option>
              </select>
            </div>
          </div>
          
          <Button onClick={handleAddMeal} className="w-full">Add Meal</Button>
        </div>
        
        <div className="bg-secondary rounded-lg p-4">
          <h3 className="font-medium mb-2">Nutrition Tips</h3>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>Try to include proteins, healthy fats, and complex carbs in each meal</li>
            <li>Aim for at least 5 servings of fruits and vegetables daily</li>
            <li>Stay hydrated by drinking water throughout the day</li>
            <li>Be mindful of portion sizes</li>
            <li>Listen to your body's hunger and fullness cues</li>
          </ul>
        </div>
      </div>
      
      <div className="rounded-lg border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Type</TableHead>
              <TableHead>Meal</TableHead>
              <TableHead>Time</TableHead>
              <TableHead>Calories</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {meals.map((meal) => (
              <TableRow key={meal.id}>
                <TableCell>
                  <div className="flex items-center">
                    <span className="bg-secondary p-1.5 rounded-full mr-2">
                      {mealTypeIcons[meal.mealType]}
                    </span>
                    <span className="capitalize">{meal.mealType}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div>
                    <p className="font-medium">{meal.name}</p>
                    <p className="text-sm text-muted-foreground line-clamp-1">{meal.description}</p>
                  </div>
                </TableCell>
                <TableCell>{meal.time}</TableCell>
                <TableCell>{meal.calories} kcal</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
