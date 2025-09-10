class Arrays {

    public static void main(String[] args) {
        arrayDefaults();
    }

    // Java auto-initializes array elements
    public static void arrayDefaults() {

        // Mark the start
        System.out.println("Mark");

        // ints - 0
        int[] arr_int = new int[10];
        System.out.println(arr_int[0]);

        // chars - empty string
        char[] arr_char = new char[10];
        System.out.println(arr_char[0]);

        // booleans - false
        boolean[] arr_boolean = new boolean[10];
        System.out.println(arr_boolean[0]);

        // floats - 0.0
        float[] arr_float = new float[10];
        System.out.println(arr_float[0]);

    }
}