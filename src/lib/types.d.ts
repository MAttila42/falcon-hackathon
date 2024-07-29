export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      collections: {
        Row: {
          created_at: string
          from: string
          id: number
          lesson: number
          name: string
          score: number | null
          to: string
        }
        Insert: {
          created_at?: string
          from: string
          id?: number
          lesson: number
          name: string
          score?: number | null
          to: string
        }
        Update: {
          created_at?: string
          from?: string
          id?: number
          lesson?: number
          name?: string
          score?: number | null
          to?: string
        }
        Relationships: [
          {
            foreignKeyName: 'collections_lesson_fkey'
            columns: ['lesson']
            isOneToOne: false
            referencedRelation: 'lessons'
            referencedColumns: ['id']
          },
        ]
      }
      lessons: {
        Row: {
          id: number
          sentence: number
          word: number
        }
        Insert: {
          id?: number
          sentence: number
          word: number
        }
        Update: {
          id?: number
          sentence?: number
          word?: number
        }
        Relationships: [
          {
            foreignKeyName: 'lessons_sentence_fkey'
            columns: ['sentence']
            isOneToOne: false
            referencedRelation: 'sentences'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'lessons_word_fkey'
            columns: ['word']
            isOneToOne: false
            referencedRelation: 'words'
            referencedColumns: ['id']
          },
        ]
      }
      sentences: {
        Row: {
          id: number
          sentence: string
        }
        Insert: {
          id?: number
          sentence: string
        }
        Update: {
          id?: number
          sentence?: string
        }
        Relationships: []
      }
      users: {
        Row: {
          collections: string | null
          created_at: string
          id: number
          native_id: string
        }
        Insert: {
          collections?: string | null
          created_at?: string
          id?: number
          native_id?: string
        }
        Update: {
          collections?: string | null
          created_at?: string
          id?: number
          native_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'users_native_id_fkey'
            columns: ['native_id']
            isOneToOne: true
            referencedRelation: 'users'
            referencedColumns: ['id']
          },
        ]
      }
      words: {
        Row: {
          id: number
          word: string
        }
        Insert: {
          id?: number
          word: string
        }
        Update: {
          id?: number
          word?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, 'public'>]

export type Tables<
  PublicTableNameOrOptions extends
  | keyof (PublicSchema['Tables'] & PublicSchema['Views'])
  | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions['schema']]['Tables'] &
    Database[PublicTableNameOrOptions['schema']]['Views'])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions['schema']]['Tables'] &
  Database[PublicTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R
    }
      ? R
      : never
  : PublicTableNameOrOptions extends keyof (PublicSchema['Tables'] &
  PublicSchema['Views'])
    ? (PublicSchema['Tables'] &
    PublicSchema['Views'])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
        ? R
        : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
  | keyof PublicSchema['Tables']
  | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
    Insert: infer I
  }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
    ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
  | keyof PublicSchema['Tables']
  | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
    Update: infer U
  }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
    ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
      Update: infer U
    }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
  | keyof PublicSchema['Enums']
  | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions['schema']]['Enums']
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions['schema']]['Enums'][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema['Enums']
    ? PublicSchema['Enums'][PublicEnumNameOrOptions]
    : never
