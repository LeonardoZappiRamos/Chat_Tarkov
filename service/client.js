import { createClient  } from '@supabase/supabase-js'

const ANON_PUBLIC_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzMyMzg4OCwiZXhwIjoxOTU4ODk5ODg4fQ.THybQRxlvWrgI_Cp0iv1WBTDfcqQesJRnjigwPCRGRI'
const URL_SUPABASE = 'https://dilbobdkqboevpbfjspg.supabase.co'

export const supabase = createClient( URL_SUPABASE,ANON_PUBLIC_KEY )
