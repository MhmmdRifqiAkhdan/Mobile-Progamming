import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';
import 'react-native-url-polyfill/auto';

const supabase_url = 'https://xmnjsmhyzhgpnjyaenwa.supabase.co/';
const supabase_key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhtbmpzbWh5emhncG5qeWFlbndhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTQwMTY1MzksImV4cCI6MTk2OTU5MjUzOX0.L75CGXZyGHtI4w4cOZBAeYRAoZOQgBPOtnPN419nwoc';
const supabase = createClient(supabase_url, supabase_key, {
  localStorage: AsyncStorage,
});

export default supabase;