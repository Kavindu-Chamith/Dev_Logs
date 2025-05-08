class Node {
    int data;
    Node next;

    Node(int data) {
        this.data = data;
        this.next = null;
    }
}

public class CustomLinkedList {
    Node head;

    public void addAtFront(int data) {
        Node newNode = new Node(data);
        newNode.next = head;
        head = newNode;
    }

    public void addAtEnd(int data) {
        Node temp = head;
        Node newNode = new Node(data);

        if (temp == null) {
            head = newNode;
            return;
        }

        while (temp.next != null) {
            temp = temp.next;
        }
        temp.next = newNode;
    }

    public void addAtPosition(int data, int position) {
        Node newNode = new Node(data);

        if (position == 1) {
            newNode.next = head;
            head = newNode;
            return;
        }

        Node current = head;
        int currentPosition = 1;

        while (current != null && currentPosition < position - 1) {
            current = current.next;
            currentPosition++;
        }

        if (current == null) {
            System.out.println("Position out of bounds.");
            return;
        }

        newNode.next = current.next;
        current.next = newNode;
    }

    public void deleteAtFront() {
        if (head != null) {
            head = head.next;
        }
    }

    public void deleteAtEnd() {
        if (head == null || head.next == null) {
            head = null;
            return;
        }

        Node temp = head;
        while (temp.next.next != null) {
            temp = temp.next;
        }
        temp.next = null;
    }

    public void deleteAnyNode(int value) {
        if (head == null) return;

        if (head.data == value) {
            head = head.next;
            return;
        }

        Node current = head;
        Node previous = null;

        while (current != null && current.data != value) {
            previous = current;
            current = current.next;
        }

        if (current == null) {
            System.out.println("Value not found in the list.");
            return;
        }

        previous.next = current.next;
    }

    public void printList() {
        Node temp = head;
        while (temp != null) {
            System.out.print(temp.data + " -> ");
            temp = temp.next;
        }
        System.out.println("null");
    }

    public static void main(String[] args) {
        CustomLinkedList list = new CustomLinkedList();

        list.addAtFront(10);
        list.addAtFront(20);
        list.addAtFront(30);
        list.addAtFront(40);
        list.addAtFront(50);

        list.addAtPosition(30, 3);
        list.printList();

        list.deleteAtFront();
        list.printList();

        list.deleteAtEnd();
        list.printList();

        list.deleteAnyNode(30);
        list.printList();
    }
}

