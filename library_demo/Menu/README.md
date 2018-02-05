# ���������� "Menu
## ����� ����������
���������� ������������� ��� ���������� �� ����� ���� �������.
���� ����� �������������� ������������ � ������������� �� ��� ������ ������ ��� ����������� �� ��������� ������.
���� ����� ������������� ���������������� � ��������� � ������� ����� ����.
���� ����� ��������� ��� �������� �����, ��� � ��������� ������� ������, �������������� ��� ����� �� ������ ����.
���� ����� ������������� ���������� ������� ���������� � ��������� ������.

## ���������� ����������
�������� �����  | ���������� �����
----------------|----------------------
menu.css        | ���� ��������� ������� ������, � ������� ������� ����������� �����.
menu.js         | ����, � ������� ���������� ������, ���������� �� ����� JavaScript (ES5). �������������� ������� - ��������� �������� �������������.
img             | ����� ��� �������� �����������, ����������� ��� �������� ����

## ����������� ����������
��� ����������� ���������� ����������:
1. ���� ������� html, � ������� ���������� ���������� ���� (�������� index.html), ������ ��������� ��� nav � �������� ���� � ������� mainMenu
```html
<body>
 <nav id="nav">
  <div class="mainMenu">
     <!-- ����� ����� ����������� �������� ��� � ������� ������� javascrip -->
  </div>
 </nav>
...
</body>
```
2. ���� ����� ���������� ������������� ��������� � ������ ������ ������ � ����� ����� library.
��������� ������� ����� ��������� ���:
```html
Project
  library       (����� ��� ���������� ���������)
    Menu        (���������� "Menu")
      img       (����� � ������������� ��� ����)
      menu.css  (������� ������)
      menu.js   (������)
    Slider      (���������� "Slider")
  css
  js
  images
  index.html
```
������������ ����� �� ������ ���������� ��������� ����� ����������, ���������� ��������������� ���� � ����.

3. � ����� html ���������� ��������� ��������������� ����:
```html
<body>
...
  <link rel="stylesheet" href="library/Menu/menu.css">
...
</body>
```

```html
<body>
...
  <script src="library/Menu/menu.js"></script>
...
</body>
```

## ��������� ����
� ������� ������������ ����� ���������:
* ���������� ������� ��������� ����, ������� �������������� �� ���������� ��������� ������������ �������� �������
```html
var arrMenuItems = ['gallery','pricing','contacts','all blocks']; //������������ ������� ����
```
* ���������� ������ (�����), �������� ��� ����� �� �������� ������ ����
```html
var arrMenuLinks = ['5','8','11',''];	//���������� ������ ����
```
* ���������� ���������� ������� �� ��������� ������ ����
```html 
var arrSubmenuNumItems = [0,0,0,11];	//���-�� ������� ������� ���
```
* ������������ ������� ��������� ����. ���������� ������������ ������ ��������������� ����� �������� �� �������� �����, �.�. 11 �� ������������ �������
```html 
var arrSubmenuItems = ['Start','3 steps','Counters','Other Customers','Gallery','Team','Shef','Pricing','Clients','Foods','Contacts']; //������������ ������� �������
```
* ���������� ������ (�����), �������� ��� �����
```html
var arrSubmenuLinks = ['#1','#2','#3','#4','#5','#6','#7','#8','#9','#10','#11']; //������ ������� �������
```
* �����, ����� ������� ���� ���������� � ��������� ������. ����� ����������� � ������������ (7000 = 7 ������)
```html
var timeHideMenu = 7000; //�������� ������� ����
```