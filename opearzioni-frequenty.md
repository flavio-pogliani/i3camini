Aggornare la copia locale
-------------------------
L'interfaccia di [Github For Windows](https://desktop.github.com/)
permette di scaricare l'ultima vesione the codice.


Cambiamenti al contenuto
------------------------
Il conteuto delle pagine e' diviso per lingua.
Ogni lingua e' strutturata allo stesso modo.
I files sono in `site/content/`.

I seguenti files sono speciali:

  * `site/content/index.md`: il contenuto di questo file appare nella home page.
  * `site/content/gallery.md`: rappresenta la galleria fotografica.


Cambiamenti ai prezzi
---------------------
I prezzi sono specificati in un file dati in `site/data/prezzi.yml`.
Le pagine prezzi in varie lingue importano i prezzi dal file sopra.
Per cambiare i prezzi e' sufficiente aggiornare `site/data/prezzi.yml`.


Contenuto della galleria
------------------------
Le immagini (e il loro ordine) presenti nella galleria sono
elencate dal file `site/data/gallery.yml`.

Per ogni immagine e' necessario specificare un percorso (relativo
alla cartella `site/static`) e una didascalia.

L'ordine delle immagini nella lista viene rispettato come ordine delle
immagini nella galleria.


Condividere i cambiamenti effettuati
------------------------------------
Una volta che il contenuto e' stato modificato e/o nuove immagini aggiunte
e' necessario pubblicare i cambiamenti.

Github For Windows permette di rivedere i cambiamenti effettuati,
salvarli in un commit locale, e caricarli su GitHub per essere condivisi.


Aggornare la versione pubblica
------------------------------
Per prima cosa e' necessario generare il sito localmente:

  1. Aprire un prompt dei comandi.
  2. `cd site/`
  3. `hugo`

Il sito finale viene salvato in `./out`.
Copiare il contenuto di questa cartella su AWS S3 nei bucket:

  * trecamini.net
  * www.trecamini.net
