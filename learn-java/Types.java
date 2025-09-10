import java.util.HashMap;

public class Types {

  public static void main(String[] args) {
    types();
    typesComposite();
  }

  // 8 primary types require initialization, similar to C but adds byte
  public static void types() {

    boolean b = true;
    char c = 'c';

    // -128 to 127
    byte by = 127;

    //-32,768 to 32,767
    short s = 32767;

    //-2,147,483,648 to 2,147,483,647
    int i = 2147483647;

    //-9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
    // the L is required
    long l = 9223372036854775807L;
    
    // ±1.4e-45 to ±3.4e38
    float f = 3.4e38f;

    // About ±4.9e-324 to ±1.8e308
    double d = Double.MAX_VALUE;

    System.out.println(b);
    System.out.println(c);
    System.out.println(by);
    System.out.println(s);
    System.out.println(i);
    System.out.println(l);
    System.out.println(f);
    System.out.println(d);
  }

  public static void typesComposite() {

    // string
    String word = "word";
    System.out.println(word);

    // array - prints the address
    int[] arr1 = {1, 2, 3};
    System.out.println(arr1);

    // hash - prints the hashmap
    HashMap<String, String> hm1 = new HashMap<String, String>();
    hm1.put("A", "AA");
    hm1.put("B", "BB");
    System.out.println(hm1);
  }

}




