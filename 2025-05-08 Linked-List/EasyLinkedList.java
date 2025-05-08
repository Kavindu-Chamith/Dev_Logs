import java.util.*;

public class EasyLinkedList {
    public static void main(String[] args) {
        LinkedList<Integer> test = new LinkedList<>();

        test.add(2);
        test.add(3);
        test.add(4);
        test.addFirst(1);
        test.addLast(5);
        test.add(5, 20); // Insert 20 at index 5

        test.remove(); // Removes the first element

        boolean containsTwo = test.contains(2);
        int size = test.size();

        System.out.println("Contains 2? " + containsTwo);
        System.out.println("List size: " + size);

        Iterator<Integer> itr = test.iterator();
        System.out.print("List elements: ");
        while (itr.hasNext()) {
            System.out.print(itr.next() + ", ");
        }
        System.out.println();
    }
}
