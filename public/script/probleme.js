const functii = [
{
    nr: 74, name:"FUrmatorulPrim",
    text: `Scrieți definiția completă a unui subprogram C++ nr_prim care primește prin singurul său parametru, n, un număr natural cu cel mult 9 cifre și returnează cel mai mic număr prim, strict mai mare decât n.`,
    example: ``,
    code:`int nr_prim(int n)
{
    ++n;                // incepem de la n+1
    while (true)        // ne oprim la doar cand gasim nr. prim
    {
        bool ok = 1;    // presupunem ca numarul este prim
        for (int d = 2; d * d <= n; ++d)
            if (n % d == 0)
            {
                ok = 0; // numarul nu este prim
                break;  // oprim verificarea 
            }
        if (ok)        //daca numarul este prim
            return n;  // se iese din functie
        ++n;           //continuam cautarea
    }
}`},

{
    nr: 1745 , name:"minDivPrim",
    text: `Subprogramul minDivPrim are un singur parametru, n, prin care primeşte un număr natural. Subprogramul returnează cel mai mic număr natural care are aceiași divizori primi ca n. Scrieţi definiţia completă a subprogramului.`,
    example: ``,
    code:`int minDivPrim(int n)
{
    for (int i = 2; i * i <= n; ++i)
    {
        if (!(n % i))
        {
            while (!(n % i))
                n /= i;
            n *= i;
        }
    }
    return n;
}`},

{  
    nr:2823 , name: "CifreImpare",
    text: `Subprogramul cifreImpare are un singur parametru, n, prin care primește un număr natural cu toate cifrele nenule (n∈[1,109]). Subprogramul returnează numărul obținut prin eliminarea tuturor cifrelor impare din n, respectiv -1 dacă nu există astfel de cifre sau dacă toate cifrele lui n sunt impare.`,
    example: ``,
    code:`int cifreImpare(int n)
{
    int copie = 0, p = 1, ok = 0;
    while (n)
    {
        if (!(n % 2))
        {
            copie += n % 10 * p;
            p *= 10;
        }
        else
            ok = 1;
        n /= 10;
    }
    if (!copie || !ok)
        return -1;
    return copie;
}`
},

{  
    nr: 2144, name: "diofantic",
    text: `Se dau numerele naturale nenule a, b, c, n, urmate de o secvența de n numere naturale distincte ordonate crescător, notată cu s. 
        Scrieți în limbajul C++ definiția completă a subprogramului diofantic care are 5 parametri, n(numărul de elemente ale secvenței s), s(tablou unidimensional indexat de la 1 la n),
        a, b și c (numere naturale nenule).`,
    code:`int diofantic(int n, int s[], long long int a, long long int b, long long int c)
{
    int out = 0;
    int i = 0, j = n - 1;

    while(i < n && j >= 0)
    {
        if(a * s[i] * s[i] + b * s[j] * s[j] == c)
        {
            ++i;
            ++out;
        }
        else if(a * s[i] * s[i] + b * s[j] * s[j] < c)
            ++i;
        else
            --j;
    }

    return out;
}`
},

{  
    nr:1501, name: "numere norocoase",
    text: `Se spune despre numărul natural nenul n că este norocos dacă numărul n2 se poate scrie ca suma a n numere naturale nenule consecutive. 
        De exemplu, 7 este norocos, deoarece 72=4+5+6+7+8+9+10.
        Scrieţi în limbajul C/C++ definiţia completă a funcţiei norocoase, care primeşte ca argumente două numere naturale a şi b şi returnează câte numere norocoase se află în intervalul [a, b].`,
    code:`int norocoase(int a, int b)
{
    if(!(a % 2) && !(b % 2))
        return (b - a) / 2;

    return (b - a) / 2 + 1;
}`
},

{
    nr: 2552, name: "poz",
    text: ``,
    code: `int poz(int x1, int y1, int l1, int i1, int x2, int y2, int l2, int i2)
{
    int rez;
    if(x1 > x2 && y1 > y2 && y1 + i1 < y2 + i2 && x1 + l1 < x2 +l2)
        rez = 0;
    else if(x1 < x2 && y1 < y2 && y1 + i1 > y2 + i2 && x1 + l1 > x2 + l2)
        rez = 0; 
    else if(x1 == x2 && y1 == y2 && i1 == i2 && l1 == l2)
        rez = 1;         
    else if(y2 + i2< y1)
        rez = 2;  
    else if(y1 + i1< y2)
        rez = 2; 
    else if(x1 + l1< x2)
        rez = 2; 
    else if(x2 + l2< x1)
        rez = 2;  
    else
        rez = 3;
    return rez;
}`
},

{
    nr: 902, name: "factorial2",
    text: ``,
    example: "",
    code: `int det(int n)
{
    int out = 1, i = 1;
    while(out < n)
    {
        ++i;
        out *= i;
    }

    if(n - out / i <= out - n)
        return out / i;

    return out; 
}`
},

{
    nr: 2830,
    name: ``,
    text: ``,
    example: ``,
    code: `int DivImpar(int a, int b)
{
    int d = a < b ? a : b;
    while (d)
    {
        if (a % d == 0 && b % d == 0 && d % 2 == 1)
            return d;
        --d;
    }
    return 1;
}`
},

{
    nr: 3104,
    name: ``,
    text: ``,
    example: ``,
    code: `int Egal(int n)
{
    int cif = 0;
    while (n)
    {
        if (n % 2)
            if (!cif)
                cif = n % 10;
            else if (cif != n % 10)
                return 0;
        n /= 10;
    }
    return 1;
}`
},

{
    nr: 898,
    name: ``,
    text: ``,
    example: ``,
    code: `long long sumfactcif(int n)
{
    long long out = 0;

    do
    {
        long long f = 1;
        for(int i = 2; i <= n % 10; ++i)
            f *= i;
        out += f;
        n /= 10; 
    } while (n);
    
    return out;
}`
},
]

const siruri = [
{
    nr: 2997,
    name: "Prescurtat",
    text: ``,
    example: ``,
    code: `void Prescurtat(char s[])
{
    char t[100];
    char *p = strtok(s, " ");

    t[0] = '\0';

    while(p) {
        if(p[strlen(p) - 1] != '.')
            strcat(t, p);
        else 
        {
            p[strlen(p) - 1] = '\0';

            if(strstr("COLEGIUL", p))
                strcat(t, "COLEGIUL");

            if(strstr("NATIONAL", p))
                strcat(t, "NATIONAL");
            
            if(strstr("LICEUL", p))
                strcat(t, "LICEUL");

            if(strstr("TEORETIC", p))
                strcat(t, "TEORETIC");
        }
        p = strtok(NULL, " ");
        if(p)
            strcat(t, " ");
    }
    strcpy(s, t);
}`
},

{
    nr: 1335,
    name: ``,
    text: ``,
    example: ``,
    code: `#include <iostream> // 1335 Caractere
#include <cstring>
using namespace std;

int main()
{
    char s1[251], s2[251];
    cin.getline(s1, 251);
    cin.getline(s2, 251);

    for (int i = 0; s1[i]; i++)
        if (strchr(s2, s1[i]))
            cout << s1[i];

    return 0;
}`
},

{
    nr: 4674,
    name: ``,
    text: ``,
    example: ``,
    code: `#include <iostream>
#include <cstring>

int main()
{
    char s[1001], t[1001];
    char cs[300][21];
    char ct[300][21];

    char sep[] = " .,!?:;";
    
    std::cin.getline(s, 1000);
    std::cin.getline(t, 1000);

    int n = 0, m = 0;
    char* p = strtok(s, sep);
    while(p)
    {
        strcpy(cs[n++], p);

        p = strtok(NULL, sep);
    }

    p = strtok(t, sep);
    while(p)
    {
        strcpy(ct[m++], p);

        p = strtok(NULL, sep);
    }

    int r = 0;

    for(int i = 0; i < n; ++i)
    {
        for(int j = 0; j < m; ++j)
        {
            if(strstr(ct[j], cs[i]) == ct[j])
            {
                ++r;
                break;
            }
        }
    }

    std::cout << r;
}`
},

{
    nr: 4797,
    name: ``,
    text: ``,
    example: ``,
    code: `#include <iostream>
#include <cstring>

int main()
{
    char s[255];
    std::cin.getline(s, 255);

    char* p = strtok(s, " ");
    while(p)
    {
        for(int i = 0; i < strlen(p) - 1; ++i)
            for(int j = i + 1; j < strlen(p); ++j)
            if(p[i] > p[j])
            {
                char aux = p[i];
                p[i] = p[j];
                p[j] = aux;
            }

        std::cout << p << '\n';

        p = strtok(NULL, " ");
    }
}`
},

{
    nr: 1456,
    name: ``,
    text: ``,
    example: ``,
    code: `#include <iostream>
#include <cstring>
using namespace std;

int main()
{
    char cuv[101];
    cin >> cuv;

    int voc = 0, nri = 0, len = strlen(cuv);
    for (int i = 0; cuv[i]; i++)
        if (strchr("aeiou", cuv[i]))
        {
            if (cuv[i] == 'i')
                nri++;
            else
                voc++;
        }

    if (voc == 0 && nri < len)
        cout << "DA";
    else
        cout << "NU";
    return 0;
}`
},

{
    nr: 891,
    name: ``,
    text: ``,
    example: ``,
    code: `#include <iostream>
#include <cstring>
using namespace std;

int main()
{
    char s[256], t[511] = "";
    cin.getline(s, 256);

    for (int i = 0; s[i]; i++)
    {
        char temp[2] = {s[i], '\0'};
        strcat(t, temp);

        if (strchr("aeiou", s[i]))
        {
            strcat(t, "p");
            strcat(t, temp);
        }
    }

    cout << t;
    return 0;
}`
},

{
    nr: 4483,
    name: ``,
    text: ``,
    example: ``,
    code: `#include <bits/stdc++.h>
// #include <cstring>
using namespace std;

int main()
{
    char s[101], t[101] = "", c[101] = "";
    cin >> s;

    for (int i = 0; s[i]; i++)
        if (strchr("aeiou", s[i]))
        {
            char tmp[2] = {s[i], '\0'};
            strcat(t, tmp);
        }

    sort(t, t + strlen(t), greater<char>()); // sort-ul din STL care merge, in mod firesc, si pe siruri de tip char

    for (int i = 0, poz = 0; s[i]; i++)
        if (strchr("aeiou", s[i]))
            c[i] = t[poz++];
        else
            c[i] = s[i];

    strcpy(s, c); // se doresc modificari pe sirul original
    cout << s;
    return 0;
}`
},

{
    nr: 3195,
    name: ``,
    text: ``,
    example: ``,
    code: `#include <iostream>
#include <cstring>

int main()
{
    char s[101][101];
    int n;

    std::cin >> n;
    for(int i = 0; i < n; ++i)
    {
        std::cin >> s[i];
    }

    bool ok = 0;

    for(int i = 0; i < n; ++i)
    {
        if(!strchr(s[i], '-') && !strchr(s[i], '.'))
        {
            std::cout << s[i] << ' ';
            ok = 1;
        }
    }
    if(!ok)
        std::cout << "Multime vida";
    ok = 0;
    std::cout << '\n';

    for(int i = 0; i < n; ++i)
    {
        if(!strchr(s[i], '.'))
            {
            std::cout << s[i] << ' ';
            ok = 1;
        }
    }
    if(!ok)
        std::cout << "Multime vida";
    ok = 0;
    std::cout << '\n';

    for(int i = 0; i < n; ++i)
    {
        if(!strstr(s[i], "..."))
            {
            std::cout << s[i] << ' ';
            ok = 1;
        }
    }
    if(!ok)
        std::cout << "Multime vida";
    ok = 0;
    std::cout << '\n';

    for(int i = 0; i < n; ++i)
    {
        if(strstr(s[i], "..."))
            {
            std::cout << s[i] << ' ';
            ok = 1;
        }
    }
    if(!ok)
        std::cout << "Multime vida";
    ok = 0;
    std::cout << '\n';
}`
},

{
    nr: 97,
    name: ``,
    text: ``,
    example: ``,
    code: `#include <iostream>
#include <cstring>

bool anagrama(char* s, char* t)
{
    if(strlen(s) != strlen(t))
    {
        return false;
    }

    for(int i = 0; i < strlen(s); ++i)
    {
        if(strchr(t, s[i]) == nullptr)
            return false;
        else if(strchr(t, s[i]) != strrchr(t, s[i]))
            return false;
    }

    return true;
}

int main()
{
    char s[255], t[255];
    std::cin >> s >> t;

    if(anagrama(s, t) && anagrama(t, s))
    {
        std::cout << 1;
        return 0;
    }

    std::cout << 0;
}
`
},

{
    nr: 89,
    name: ``,
    text: ``,
    example: ``,
    code: `#include <bits/stdc++.h>
using namespace std;
ifstream fin("palindrom.in");
ofstream fout("palindrom.out");

int main()
{

    int n;
    fin >> n;
    fin.get();

    while (n--)
    {
        char s[201], t[201];
        fin.getline(s, 201);

        int len = 0;
        for (int i = 0; s[i]; ++i)
            if (s[i] != ' ')
                t[len++] = s[i];
        t[len] = '\0';

        bool ok = 1;
        for (int i = 0; i < len / 2; ++i)
            if (t[i] != t[len - 1 - i])
            {
                ok = 0;
                break;
            }

        fout << (ok ? 1 : 0) << '\n';
    }

    return 0;
}`
},
];

const structuri = [
{
    nr: 919,
    text: `În declararea alăturată, variabila m memorează, pentru fiecare dintre cele 20 de medicamente dintr-o farmacie, prețul, precum și date despre substanța activă specifică: doza și codul acesteia.
    O expresie a cărei valoare reprezintă codul substanței active specifice din primul medicament este:`,
    code: `struct medicament
{ float pret;   
  struct  
  { int cod, doza; 
  }substanta; 
}m[20];`,
    var1: `m[0].cod.substanta`,
    var2: `m[0].substanta.cod`,
    var3: `m.cod.substanta[0]`,
    var4: `m.substanta.cod[0]`,
    correct: 4
},
{
    nr: 80,
    text: `Considerând declararea de mai jos, care dintre următoarele secvenţe realizează în mod corect citirea de la tastatură a valorilor celor două câmpuri ale variabilei x?`,
    code: `struct {
  int a;
  int b;
} x;`,
    var1: `cin>>x.a>>x.b;`,
    var2: `cin>>a.x>>b.x;`,
    var3: `cin>>x;`,
    var4: `cin>>a->x>>b->x;`,
    correct: 1
},
{
    nr: 220,
    text: `Considerăm declararea următoare folosită pentru a memora numele, prenumele şi cele două note ale unui elev.
    Care dintre instrucţiunile de mai jos calculează în variabila reală m media aritmetică a notelor elevului ale cărui informaţii sunt memorate în variabila x?`,
    code: `struct elev{
  char nume[10], prenume[20];
  float nota1, nota2;
} x;`,
    var1: `m=(x.nota1+x.nota2)/2;`,
    var2: `m=(nota1+nota2)/2;`,
    var3: `x.m=(x.nota1+x.nota2)/2;`,
    var4: `m=(x,nota1+x,nota2)/2;`,
    correct: 1
},
{
    nr: 309,
    text: `Se consideră declarările următoare.Care este tipul expresiei x.x.y?`,
    code: `struct A
{ int x;
 char y;
};
struct B
{ float x;
 long y;
};
struct C
{ struct A x;
 struct B y;
} x, y;`,
    var1: `long`,
    var2: `int`,
    var3: `char`,
    var4: `float`,
    correct: 3
},
{
    nr: 1352,
    text: `Variabila oras, declarată mai jos, memorează unele date obținute în urma recensământului populației în 100 dintre orașele țării.
    Știind că densitatea unui oraș este egală cu raportul dintre numărul de locuitori și suprafața acestuia (exprimată în km2), indicați o expresie a cărei valoare este egală cu densitatea primului oraș.`,
    code: `struct recensamant
{ char nume[21];
  int nrLocuitori;
  float suprafata;
} oras[100];`,
    var1: `oras[0].nrLocuitori/oras[0].suprafata`,
    var2: `oras.nrLocuitori[0]/oras.suprafata[0]`,
    var3: `nrLocuitori[0].oras/suprafata[0].oras`,
    var4: `nrLocuitori.oras[0]/suprafata.oras[0]`,
    correct: 1
}
];

const recursivitate =[
{
    nr: 481,
    text: `Subprogramul F este definit mai jos.
    Prin care dintre instrucţiunile următoare se poate apela subprogramul pentru a afişa, în ordine strict descrescătoare, toţi divizorii pozitivi proprii ai numărului 2015 (divizori naturali diferiți de 1 și de 2015).`,
    code: `void F (int n, int d)
{ if(d<n/2) F(n, d+1);
  if(n%d==0)
  cout<<d<<’ ’;
}`,
    var1: `F(2015,2015);`,
    var2: `F(2015,1);`,
    var3: `F(2015,2);`,
    var4: `F(2015,d);`,
    correct: 3
}, 

{
    nr: 1199,
    text: `Subprogramul f este definit mai jos.
    Indicați valoarea f(38627).`,
    code: `int f(int n)
{ int c;
  if (n==0) return 9;
  c=f(n/10); if (n%10<c) return n%10;
  return c;
}`,
    var1: `2`,
    var2: `3`,
    var3: `7`,
    var4: `8`,
    correct: 1
}, 

{
    nr: 1232,
    text: `Subprogramele f1 și f2 sunt definite mai jos. Indicați valoarea f2(41382).`,
    code: `int f1(int c)
{ if (c%2==1) return 1; 
  else return 2; 
}

int f2(int n) 
{ if (n==0) return 0; 
  else returnf1(n%10)+f2(n/10);
}`,
    var1: `7`,
    var2: `8`,
    var3: `9`,
    var4: `10`,
    correct: 2
}, 

{
    nr: 917,
    text: `Subprogramele f1 şi f2 sunt definite mai jos.
    Cel mai mare divizor comun al lui 30 și 50 se obține în urma apelului:`,
    code: `int f1 (int x, int y)
{ if(x%2!=0 || y%2!=0)return 1;
else return 2*f1(x/2,y/2);
}

int f2 (int x, int y)
{ if (x==y) return x;
else
if(x>y) return f2(x-y,y);
else return f2(x, y-x);
}`,
    var1: `f1(30,50)`,
    var2: `f2(30,50)`,
    var3: `f1(30/2,50)`,
    var4: `f2(30/2,50)`,
    correct: 2
}, 

{
    nr: 586,
    text: `Subprogramul f are definiţia de mai jos. Ce se va afişa în urma apelului f(12345)?`,
    code: `void f(long n)
{ if (n>9)
  { cout<<n/100; | printf(“%d”,n/100);
    f(n/10);
  }
}`,
    var1: `1231210`,
    var2: `123121`,
    var3: `1234123121`,
    var4: `123`,
    correct: 1
}, 
];

const divide = [];

export { functii, siruri, structuri, recursivitate, divide };