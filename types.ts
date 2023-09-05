const book = {
    "kind": "books#volume",
    "id": "TpmeBwAAQBAJ",
    "etag": "V1modE7/S2o",
    "selfLink": "https://www.googleapis.com/books/v1/volumes/TpmeBwAAQBAJ",
    "volumeInfo": {
      "title": "Cyber War Versus Cyber Realities",
      "subtitle": "Cyber Conflict in the International System",
      "authors": [
        "Brandon Valeriano",
        "Ryan C. Maness"
      ],
      "publisher": "Oxford University Press, USA",
      "publishedDate": "2015",
      "description": "\"What Valeriano and Maness provide in this book is an empirically-grounded discussion of the reality of cyber conflict, based on an analysis of cyber incidents and disputes experienced by international states since 2001. They delineate patterns of cyber conflict to develop a larger theory of cyber war that gets at the processes leading to cyber conflict. They find that, in addition to being a little-used tactic, cyber incidents thus far have been of a rather low-level intensity and with few to no long-term effects. Interestingly, they also find that many cyber incidents are motivated by regional conflict. They argue that restraint is the norm in cyberspace and suggest there is evidence this norm can influence how the tactic is used in the future. In conclusion, the authors lay out a set of policy recommendations for proper defense against cyber threats that is built on restraint and regionalism\"--",
      "industryIdentifiers": [
        {
          "type": "ISBN_13",
          "identifier": "9780190204792"
        },
        {
          "type": "ISBN_10",
          "identifier": "0190204796"
        }
      ],
      "readingModes": {
        "text": false,
        "image": true
      },
      "pageCount": 289,
      "printType": "BOOK",
      "categories": [
        "History"
      ],
      "maturityRating": "NOT_MATURE",
      "allowAnonLogging": false,
      "contentVersion": "1.1.0.0.preview.1",
      "panelizationSummary": {
        "containsEpubBubbles": false,
        "containsImageBubbles": false
      },
      "imageLinks": {
        "smallThumbnail": "http://books.google.com/books/content?id=TpmeBwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        "thumbnail": "http://books.google.com/books/content?id=TpmeBwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
      },
      "language": "en",
      "previewLink": "http://books.google.com/books?id=TpmeBwAAQBAJ&printsec=frontcover&dq=cyber&hl=&cd=1&source=gbs_api",
      "infoLink": "http://books.google.com/books?id=TpmeBwAAQBAJ&dq=cyber&hl=&source=gbs_api",
      "canonicalVolumeLink": "https://books.google.com/books/about/Cyber_War_Versus_Cyber_Realities.html?hl=&id=TpmeBwAAQBAJ"
    },
    "saleInfo": {
      "country": "IL",
      "saleability": "NOT_FOR_SALE",
      "isEbook": false
    },
    "accessInfo": {
      "country": "IL",
      "viewability": "PARTIAL",
      "embeddable": true,
      "publicDomain": false,
      "textToSpeechPermission": "ALLOWED",
      "epub": {
        "isAvailable": false
      },
      "pdf": {
        "isAvailable": true,
        "acsTokenLink": "http://books.google.com/books/download/Cyber_War_Versus_Cyber_Realities-sample-pdf.acsm?id=TpmeBwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
      },
      "webReaderLink": "http://play.google.com/books/reader?id=TpmeBwAAQBAJ&hl=&source=gbs_api",
      "accessViewStatus": "SAMPLE",
      "quoteSharingAllowed": false
    },
    "searchInfo": {
      "textSnippet": "&quot;What Valeriano and Maness provide in this book is an empirically-grounded discussion of the reality of cyber conflict, based on an analysis of cyber incidents and disputes experienced by international states since 2001."
    }
  }
export type Book =  typeof book
export interface BookResponse {
    kind: "books#volumes"
    totalItems: number
    items: Book[]
}

type ItemId = string

export type ShopItem = {
    id: string
    name: string
    thumbnail: string
}

export type CartItem = ShopItem & {
  amount: number
}

export type CartItems = Record<ItemId, CartItem>