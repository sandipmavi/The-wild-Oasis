import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://sydydgermjomplhkxblh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN5ZHlkZ2VybWpvbXBsaGt4YmxoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQxMzcxOTgsImV4cCI6MjA1OTcxMzE5OH0.uDRfze4UKdL3J7fGV4S_MJd9WvJOt4frOPrhR-E4ZAg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
