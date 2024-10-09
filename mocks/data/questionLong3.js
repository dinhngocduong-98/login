const Paragraph_1 = "The wings are joined at the fuselage side to a center wing box built integrally with the fuselage each comprises a primary structure of box – type construction, auxiliary structure and movable flight surfaces. The main gear is supported by the continuation of the primary structure aft of the rear spar.</br>The primary structure consists mainly of machined spars, ribs and stringer reinforced top and bottom main skins, and is utilized as two fuel tanks with boundaries formed by the front and rear spars and ribs 1, 14 and 27. Design of these tanks provides that primary sealing is by the mechanical attachment of the structural members with the additional use of polysulphide sealants. The fasteners used are mainly steel and titanium Hi-Lok or Taper-Lok type bolts and light alloy Dilemmatic rivets. Bolt location diagrams, which identify each bolt position in the skins between the front and rear spars, are available on request under Drawing number R571.40138 for B2 airplanes and R571.40141 for B4 airplanes.</br>With the exception of ribs 2 and 15, the intervening ribs act as fuel baffles. Ribs 2 and 15 are partially sealed and fitted with clack valves which permit the fuel to flow inboard only. The area between ribs 27 and 29 is utilized as a fuel surge vent tank.Access to the fuel tank interior is through removable manhole covers in the bottom skin panels."

const Paragraph_2 = "TITLE: Fuel-general-Re-routing of cable for high level sensor in outer tank.There have been occurrences ______ (1) the high level sensor cable between ribs 26 and 27 in the outer fuel tank ______ (2). The clipping and routing of the cable coupled ____ (3) excessive slack between “P” clips could allow it _____ (4) against the support canister for _____(5) magnetic level indicator (MLI).</br>_____ (6) cable chafing, this modification _____ (7) locally manufactured longer cleats and a reversal of the “P” clips _____ (8) the cable. To prevent further cable sag, “P” clips of a smaller size _____ (9) to grip the cable tighter. This ensures that adequate clearance _____ (10) between the cable and the MLI support canister."

const Paragraph_3 = "Subject: Single engine flame out in flight due to fuel starvation</br>Description:</br></>To identify the control Knob configuration, please note that following wing tank/cross feed valve Knobs exist.</br>P/N NM87-1006-3 (isolation valve), NM87-1011-4 (X-feed valve): basic version with a round bore, fit-table to the flat drive shaft by special installation instructions only (should not be in service any more).</br>Since no P/N is engraved on the control Knobs, a physical check of the bore is to be performed by removing the control Knobs.</br>Airbus Industry strongly recommend applying the test procedure as per AMM 28-21-00, page block 400, subsequent to control Knob reinstallation, thus assuring that the tank isolation valves and X-feed valve are actually open."

const Paragraph_4 = "This Service Bulletin introduces ____ (1) new fire extinguisher _____(2) each lavatory waste container area. _____ (3) new fire extinguishers have modified discharge tubes _____ (4) enable them to be installed in a vertical position ____ (5) the discharge tubes below. This increases the discharge efficiency ____ (6) the units.</br>DESCRIPTION</br>Accomplishment of this Service Bulletin consists of:</br>- ____ (7) the bulk heading (with the fire extinguisher attached) and waste chute from the waste container area of _____ (8) lavatory.</br>- Installing the new fire extinguishers ____ (9) the waste chutes.</br>- Installing the temperature plates on the waste chutes</br>- Installing the waste chutes ____ (10) the bulk headings."

const Paragraph_5 = "When the ULD is in the ball mat area, the lateral PDU moves it. The joystick controls the lateral PDU. When you push the joystick to the IN position and hold it, the power is supplied to the lateral PDU. This causes the rollers of the PDU to turn in the IN direction and the drive roller moves up to touch the base of the ULD. The drive roller moves the ULD across the cargo compartment until it engages in the YZ-latches and YZ-guide rails which stop it. The drive roller below the ULD turns until the joystick is released and goes back to the center/neutral position. Thus the power supply to the lateral PDU is stopped and causes the drive roller to go down.</br>To move the ULD in the ball mat area to the rear of the cargo compartment, push the joystick to the AFT position and hold it. Power is supplied to all of the longitudinal PDU; this causes their rollers to turn and the drive roller to come up. The ULD then moves to the rear of the cargo compartment from one PDU to the next until the ULD engages the endstops. The roller of the longitudinal PDU turn until the joystick is released and goes back to the center/neutral position. The XZ latches keep the ULD aligned while the ULD moves into the loading position. When the ULD is in position, you lift the XZ single latch 32 in front of it manually to hold the ULD. When you lift the XZ single latch 32, the proximity switch below the latch operates and stops the power supply to the related PDU. The PDU is now isolated from the power supply. When you load the next ULD, the PDU below the ULD already in position does not run. "

const Paragraph_6 = "You can find the passenger oxygen masks stowed in passenger service units ____ (1) the passenger seats. When the passenger oxygen system ____ (2) the oxygen masks drop down ____ (3) the overhead stowage boxes to be ____ (4) for the passengers….</br>Here you can see the release logic ____ (5) the passenger oxygen system. The system is normally activated ____ (6) by a pressure switch in pressurized area.</br>If, for some ____ (7), automatic activation by the altitude pressure switch fails, there is a manual control in the cockpit which ____ (8) the passenger oxygen system. After activation, the passenger oxygen system must _____ (9) by pushing the reset button in the cockpit. For maintenance purposes there is a special tool for opening single stowage boxes without activating the whole system.</br>The passenger oxygen system is activated ____ (10) on most aircraft, but the actual supply of oxygen can be different. There are two ways that oxygen is supplied to the system., with a chemical system and with a gaseous system."

const Paragraph_7 = "It has been reported that since E.I.S and increased number of ground crew call horns have been replace.</br>- Preliminary studies have shown that these horns are burning</br>- Further studies have been initiated in order to determine the exact causes of this phenomenon and to find a solution to this trouble.</br>- Laboratory tests have indicated a weakness of relay 4WC.</br>- New fatigue strength tests with different relays were conducted.- Test results showed that after 2 minutes of operation the horn failed.</br>- Operators should determine and advise airbus if the horn is being operated for more than 3 minutes at a time due to an activation of a warning on the ground, such as a loss of avionics ventilation, APU fire or ADIRS operation on aircraft batteries. These warnings trigger as a result of the ground crew call horn.</br>- In order to temporarily reduce the horn failure by 10% to 20%, an improved horn control relay is now available through SB 23-1026.</br>- In addition investigations and tests are in process to improve the current horn reliability. The result of these investigations is expected for end June 91."











const QUESTIONLONG = [
    {
        "id" : 30001,
        "title": "Read the following paragraph and then decide which is True (A) or False (B) or Not given (C). Level 1",
        "questionParent": Paragraph_1,
        "items" : [
            {
                "id": 1,
                "question": "Each wing comprises three main parts",
                "plans": [
                    {
                        "value": "TRUE"
                    },
                    {
                        "value": "FALSE"
                    },
                    {
                        "value": "NOT GIVEN"
                    }
                ],
                "answer": "TRUE",
                "selectedAnswer": null
            },
            {
                "id": 2,
                "question": "The main gear is attached to the wing center box",
                "plans": [
                    {
                        "value": "TRUE"
                    },
                    {
                        "value": "FALSE"
                    },
                    {
                        "value": "NOT GIVEN"
                    }
                ],
                "answer": "FALSE",
                "selectedAnswer": null
            },
            {
                "id": 3,
                "question": "The spars are assembled ",
                "plans": [
                    {
                        "value": "TRUE"
                    },
                    {
                        "value": "FALSE"
                    },
                    {
                        "value": "NOT GIVEN"
                    }
                ],
                "answer": "FALSE",
                "selectedAnswer": null
            },
            {
                "id": 4,
                "question": "There are 29 ribs",
                "plans": [
                    {
                        "value": "TRUE"
                    },
                    {
                        "value": "FALSE"
                    },
                    {
                        "value": "NOT GIVEN"
                    }
                ],
                "answer": "TRUE",
                "selectedAnswer": null
            },
            {
                "id": 5,
                "question": "The fuel tanks are formed by the two spars and ribs 1, 13, 27",
                "plans": [
                    {
                        "value": "TRUE"
                    },
                    {
                        "value": "FALSE"
                    },
                    {
                        "value": "NOT GIVEN"
                    }
                ],
                "answer": "FALSE",
                "selectedAnswer": null
            }
        ],
        "total": 5
    },
    {
        "id": 3002,
        "title": "Read the following passage carefully and then choose the best option to fit each space by choosing A, B, or C Level 1",
        "questionParent": Paragraph_2,
        "items" : [
            {   
                "id": 1,
                "question": null,
                "plans": [
                    {
                        "value": "where"
                    },
                    {
                        "value": "when"
                    },
                    {
                        "value": "while"
                    }
                ],
                "answer": "where",
                "selectedAnswer": null
            },
            {   
                "id": 2,
                "question": null,
                "plans": [
                    {
                        "value": "has chafed"
                    },
                    {
                        "value": "has found chafed"
                    },
                    {
                        "value": "has been found chafed"
                    }
                ],
                "answer": "has been found chafed",
                "selectedAnswer": null
            },
            {
                "id": 3,
                "question": null,
                "plans": [
                    {
                        "value": "in"
                    },
                    {
                        "value": "within"
                    },
                    {
                        "value": "with"
                    }
                ],
                "answer": "with",
                "selectedAnswer": null
            },
            {   
                "id": 4,
                "question": null,
                "plans": [
                    {
                        "value": "chafe"
                    },
                    {
                        "value": "to chafe"
                    },
                    {
                        "value": "chafing"
                    }
                ],
                "answer": "to chafe",
                "selectedAnswer": null
            },
            {
                "id": 5,
                "question": null,
                "plans": [
                    {
                        "value": "the"
                    },
                    {
                        "value": "this"
                    },
                    {
                        "value": "a"
                    }
                ],
                "answer": "the",
                "selectedAnswer": null
            },
            {
                "id": 6,
                "question": null,
                "plans": [
                    {
                        "value": "Prevent"
                    },
                    {
                        "value": "Preventing"
                    },
                    {
                        "value": "To prevent"
                    }
                ],
                "answer": "To prevent",
                "selectedAnswer": null
            },
            {
                "id": 7,
                "question": null,
                "plans": [
                    {
                        "value": "introduction"
                    },
                    {
                        "value": "introduced"
                    },
                    {
                        "value": "introduces"
                    }
                ],
                "answer": "introduces",
                "selectedAnswer": null
            },
            {
                "id": 8,
                "question": null,
                "plans": [
                    {
                        "value": "supporting"
                    },
                    {
                        "value": "support"
                    },
                    {
                        "value": "supported"
                    }
                ],
                "answer": "supporting",
                "selectedAnswer": null
            },
            {
                "id": 9,
                "question": null,
                "plans": [
                    {
                        "value": "are using"
                    },
                    {
                        "value": "are used"
                    },
                    {
                        "value": "are"
                    }
                ],
                "answer": "are used",
                "selectedAnswer": null
            },
            {
                "id": 10,
                "question": null,
                "plans": [
                    {
                        "value": "maintaining"
                    },
                    {
                        "value": "is maintained"
                    },
                    {
                        "value": "is maintaining"
                    }
                ],
                "answer": "is maintained",
                "selectedAnswer": null
            }
        ],
        "total": 10
    },
    {
       "id" : 30003,
        "title": "Read the following paragraph and then decide which is True (A) or False (B) or Not given (C). Level 1",
        "questionParent": Paragraph_3,
        "items" : [
            {   
                "id": 1,
                "question": "There was an engine fire in flight",
                "plans": [
                    {
                        "value": "TRUE"
                    },
                    {
                        "value": "FALSE"
                    },
                    {
                        "value": "NOT GIVEN"
                    }
                ],
                "answer": "FALSE",
                "selectedAnswer": null
            },
            {   
                "id": 2,
                "question": "Fuel flow was stopped to one engine",
                "plans": [
                    {
                        "value": "TRUE"
                    },
                    {
                        "value": "FALSE"
                    },
                    {
                        "value": "NOT GIVEN"
                    }
                ],
                "answer": "TRUE",
                "selectedAnswer": null
            },
            {   
                "id": 3,
                "question": "The fuel lever was set to OFF",
                "plans": [
                    {
                        "value": "TRUE"
                    },
                    {
                        "value": "FALSE"
                    },
                    {
                        "value": "NOT GIVEN"
                    }
                ],
                "answer": "FALSE",
                "selectedAnswer": null
            },
            {   
                "id": 4,
                "question": "Airbus Industry recommends operators to check P/N on Knob",
                "plans": [
                    {
                        "value": "TRUE"
                    },
                    {
                        "value": "FALSE"
                    },
                    {
                        "value": "NOT GIVEN"
                    }
                ],
                "answer": "FALSE",
                "selectedAnswer": null
            },
            {   
                "id": 5,
                "question": "The bore of the old Knob is circular.",
                "plans": [
                    {
                        "value": "TRUE"
                    },
                    {
                        "value": "FALSE"
                    },
                    {
                        "value": "NOT GIVEN"
                    }
                ],
                "answer": "TRUE",
                "selectedAnswer": null
            }
        ],
        "total": 5 
    },
    {
        "id" : 30004,
        "title": "Read the following paragraph and then decide which is True (A) or False (B) or Not given (C). Level 1",
        "questionParent": Paragraph_4,
        "items" : [
            {
                "id": 1,
                "question": null,
                "plans": [
                    {
                        "value": "the"
                    },
                    {
                        "value": ""-""
                    },
                    {
                        "value": "a"
                    }
                ],
                "answer": "a",
                "selectedAnswer": null
            },
            {
                "id": 2,
                "question": null,
                "plans": [
                    {
                        "value": "at"
                    },
                    {
                        "value": "in"
                    },
                    {
                        "value": "on"
                    }
                ],
                "answer": "at",
                "selectedAnswer": null
            },
            {
                "id": 3,
                "question": null,
                "plans": [
                    {
                        "value": "the"
                    },
                    {
                        "value": "A"
                    },
                    {
                        "value": "this"
                    }
                ],
                "answer": "the",
                "selectedAnswer": null
            },
            {
                "id": 4,
                "question": null,
                "plans": [
                    {
                        "value": "then"
                    },
                    {
                        "value": "which"
                    },
                    {
                        "value": "whom"
                    }
                ],
                "answer": "which",
                "selectedAnswer": null
            },
            {
                "id": 5,
                "question": null,
                "plans": [
                    {
                        "value": "then"
                    },
                    {
                        "value": "and"
                    },
                    {
                        "value": "with"
                    }
                ],
                "answer": "with",
                "selectedAnswer": null
            },
            {
                "id": 6,
                "question": null,
                "plans": [
                    {
                        "value": "of"
                    },
                    {
                        "value": "by"
                    },
                    {
                        "value": "under"
                    }
                ],
                "answer": "of",
                "selectedAnswer": null
            },
            {
                "id": 7,
                "question": null,
                "plans": [
                    {
                        "value": "Remove"
                    },
                    {
                        "value": "Removing"
                    },
                    {
                        "value": "aRemoves"
                    }
                ],
                "answer": "Removing",
                "selectedAnswer": null
            },
            {
                "id": 8,
                "question": null,
                "plans": [
                    {
                        "value": "one"
                    },
                    {
                        "value": "every"
                    },
                    {
                        "value": "each"
                    }
                ],
                "answer": "each",
                "selectedAnswer": null
            },
            {
                "id": 9,
                "question": null,
                "plans": [
                    {
                        "value": "in front of"
                    },
                    {
                        "value": "on"
                    },
                    {
                        "value": "over"
                    }
                ],
                "answer": "on",
                "selectedAnswer": null
            },
            {
                "id": 10,
                "question": null,
                "plans": [
                    {
                        "value": "and"
                    },
                    {
                        "value": "with"
                    },
                    {
                        "value": "into"
                    }
                ],
                "answer": "and",
                "selectedAnswer": null
            }
        ],
        "total": 10
    },
    {
        "id" : 30001,
        "title": "Read the following paragraph and then decide which is True (A) or False (B) or Not given (C). Level 2",
        "questionParent": Paragraph_5,
        "items" : [
            {
                "id": 1,
                "question": "The drive rollers move the ULD.",
                "plans": [
                    {
                        "value": "TRUE"
                    },
                    {
                        "value": "FALSE"
                    },
                    {
                        "value": "NOT GIVEN"
                    }
                ],
                "answer": "TRUE",
                "selectedAnswer": null
            },
            {
                "id": 2,
                "question": "The joystick controls both lateral and longitudinal PDUs",
                "plans": [
                    {
                        "value": "TRUE"
                    },
                    {
                        "value": "FALSE"
                    },
                    {
                        "value": "NOT GIVEN"
                    }
                ],
                "answer": "FALSE",
                "selectedAnswer": null
            },
            {
                "id": 3,
                "question": "The drive roller turns when the joystick is released.",
                "plans": [
                    {
                        "value": "TRUE"
                    },
                    {
                        "value": "FALSE"
                    },
                    {
                        "value": "NOT GIVEN"
                    }
                ],
                "answer": "FALSE",
                "selectedAnswer": null
            },
            {
                "id": 4,
                "question": "The drive rollers can move up and down.",
                "plans": [
                    {
                        "value": "TRUE"
                    },
                    {
                        "value": "FALSE"
                    },
                    {
                        "value": "NOT GIVEN"
                    }
                ],
                "answer": "TRUE",
                "selectedAnswer": null
            },
            {
                "id": 5,
                "question": "Engagement of either the YZ-latches/ guide rails or the end-stops stops ULD movement.",
                "plans": [
                    {
                        "value": "TRUE"
                    },
                    {
                        "value": "FALSE"
                    },
                    {
                        "value": "NOT GIVEN"
                    }
                ],
                "answer": "TRUE",
                "selectedAnswer": null
            },
            {
                "id": 6,
                "question": "When the joystick is released the drive roller goes down.",
                "plans": [
                    {
                        "value": "TRUE"
                    },
                    {
                        "value": "FALSE"
                    },
                    {
                        "value": "NOT GIVEN"
                    }
                ],
                "answer": "TRUE",
                "selectedAnswer": null
            },
            {
                "id": 7,
                "question": "The XZ single latch is automatic.",
                "plans": [
                    {
                        "value": "TRUE"
                    },
                    {
                        "value": "FALSE"
                    },
                    {
                        "value": "NOT GIVEN"
                    }
                ],
                "answer": "FALSE",
                "selectedAnswer": null
            },
            {
                "id": 8,
                "question": "The proximity switch is operated by the joystick. ",
                "plans": [
                    {
                        "value": "TRUE"
                    },
                    {
                        "value": "FALSE"
                    },
                    {
                        "value": "NOT GIVEN"
                    }
                ],
                "answer": "FALSE",
                "selectedAnswer": null
            },
            {
                "id": 9,
                "question": "The PDUs below the ULDs in position continue to run.",
                "plans": [
                    {
                        "value": "TRUE"
                    },
                    {
                        "value": "FALSE"
                    },
                    {
                        "value": "NOT GIVEN"
                    }
                ],
                "answer": "FALSE",
                "selectedAnswer": null
            },
            {
                "id": 10,
                "question": "The Aft cargo Compartment comprises 4 bays",
                "plans": [
                    {
                        "value": "TRUE"
                    },
                    {
                        "value": "FALSE"
                    },
                    {
                        "value": "NOT GIVEN"
                    }
                ],
                "answer": "TRUE",
                "selectedAnswer": null
            }
        ],
        "total": 10
    },
    {
        "id" : 30006,
        "title": "Read the following paragraph and then decide which is True (A) or False (B) or Not given (C). Level 1",
        "questionParent": Paragraph_6,
        "items" : [
            {
				"id": 1,
                "question": null,
                "plans": [
                    {
                        "value": "on"
                    },
                    {
                        "value": "over"
                    },
                    {
                        "value": "above"
                    }
                ],
                "answer": "above",
                "selectedAnswer": null
            },
            {
				"id": 2,
                "question": null,
                "plans": [
                    {
                        "value": "is activated"
                    },
                    {
                        "value": "activates"
                    },
                    {
                        "value": "activated"
                    }
                ],
                "answer": "is activated",
                "selectedAnswer": null
            },
            {
				"id": 3,
                "question": null,
                "plans": [
                    {
                        "value": "in"
                    },
                    {
                        "value": "from"
                    },
                    {
                        "value": "into"
                    }
                ],
                "answer": "from",
                "selectedAnswer": null
            },
            {
				"id": 4,
                "question": null,
                "plans": [
                    {
                        "value": "able"
                    },
                    {
                        "value": "available"
                    },
                    {
                        "value": "availably"
                    }
                ],
                "answer": "available",
                "selectedAnswer": null
            },
            {
				"id": 5,
                "question": null,
                "plans": [
                    {
                        "value": "for"
                    },
                    {
                        "value": "to"
                    },
                    {
                        "value": "with"
                    }
                ],
                "answer": "for",
                "selectedAnswer": null
            },
            {
				"id": 6,
                "question": null,
                "plans": [
                    {
                        "value": "automatic"
                    },
                    {
                        "value": "auto"
                    },
                    {
                        "value": "automatically"
                    }
                ],
                "answer": "automatically",
                "selectedAnswer": null
            },
            {
				"id": 7,
                "question": null,
                "plans": [
                    {
                        "value": "reasons"
                    },
                    {
                        "value": "reasonable"
                    },
                    {
                        "value": "reason"
                    }
                ],
                "answer": "reason",
                "selectedAnswer": null
            },
            {
				"id": 8,
                "question": null,
                "plans": [
                    {
                        "value": "activate"
                    },
                    {
                        "value": "activated"
                    },
                    {
                        "value": "will activate"
                    }
                ],
                "answer": "will activate",
                "selectedAnswer": null
            },
            {
				"id": 9,
                "question": null,
                "plans": [
                    {
                        "value": "reset"
                    },
                    {
                        "value": "been reset"
                    },
                    {
                        "value": "be reset"
                    }
                ],
                "answer": "be reset",
                "selectedAnswer": null
            },
            {
				"id": 10,
                "question": null,
                "plans": [
                    {
                        "value": "the same way"
                    },
                    {
                        "value": "the same"
                    },
                    {
                        "value": "in the same way"
                    }
                ],
                "answer": "in the same way",
                "selectedAnswer": null
            }            
        ],
        "total": 10
    },
    {
        "id" : 30007,
        "title": "Read the following paragraph and then decide which is True (A) or False (B) or Not given (C). Level 1",
        "questionParent": Paragraph_7,
        "items" : [
            {
				"id": 1,
                "question": "Which component is faulty?",
                "plans": [
                    {
                        "value": "APU fire"
                    },
                    {
                        "value": "batteries"
                    },
                    {
                        "value": "Ground crew call horn"
                    }
                ],
                "answer": "Ground crew call horn",
                "selectedAnswer": null
            },
            {
				"id": 2,
                "question": "Is there a solution to this problem?",
                "plans": [
                    {
                        "value": "No"
                    },
                    {
                        "value": "Yes"
                    },
                    {
                        "value": "Yes, have"
                    }
                ],
                "answer": "No",
                "selectedAnswer": null
            },
            {
				"id": 3,
                "question": "What is the reference of the faulty relay?",
                "plans": [
                    {
                        "value": "WC"
                    },
                    {
                        "value": "4WC"
                    },
                    {
                        "value": "forward galley"
                    }
                ],
                "answer": "4WC",
                "selectedAnswer": null
            },
            {
				"id": 4,
                "question": "The horn fails after how many minutes?",
                "plans": [
                    {
                        "value": "2 mins"
                    },
                    {
                        "value": "2 hrs"
                    },
                    {
                        "value": "3 minutes"
                    }
                ],
                "answer": "2 mins",
                "selectedAnswer": null
            },
            {
				"id": 5,
                "question": "Whom must the airlines tell of any failures?",
                "plans": [
                    {
                        "value": "Airbus Industry"
                    },
                    {
                        "value": "VAECO"
                    },
                    {
                        "value": "Vietnam Airlines"
                    }
                ],
                "answer": "Airbus Industry",
                "selectedAnswer": null
            },
            {
				"id": 6,
                "question": "How can you install the new control relay?",
                "plans": [
                    {
                        "value": "Through an A/D "
                    },
                    {
                        "value": "Through S/B 23-1026"
                    },
                    {
                        "value": "Wait for the order"
                    }
                ],
                "answer": "Through S/B 23-1026",
                "selectedAnswer": null
            },
            {
				"id": 7,
                "question": "Is this a definitive solution?",
                "plans": [
                    {
                        "value": "No"
                    },
                    {
                        "value": "Yes"
                    },
                    {
                        "value": "Exactly"
                    }
                ],
                "answer": "No",
                "selectedAnswer": null
            },
            {
				"id": 8,
                "question": "Which have the same meaning as these words: FURTHERMORE",
                "plans": [
                    {
                        "value": "addition"
                    },
                    {
                        "value": "in addition"
                    },
                    {
                        "value": "investigation"
                    }
                ],
                "answer": "in addition",
                "selectedAnswer": null
            },
            {
				"id": 9,
                "question": "Which have the same meaning as these words: DEMONSTRATED",
                "plans": [
                    {
                        "value": "shown"
                    },
                    {
                        "value": "expected"
                    },
                    {
                        "value": "reported"
                    }
                ],
                "answer": "shown",
                "selectedAnswer": null
            },
            {
				"id": 10,
                "question": "Which have the same meaning as these words: UNDER WAY",
                "plans": [
                    {
                        "value": "due to "
                    },
                    {
                        "value": "being operated"
                    },
                    {
                        "value": "in process"
                    }
                ],
                "answer": "in process",
                "selectedAnswer": null
            }
        ],
        "total": 10
    }
]

export default QUESTIONLONG